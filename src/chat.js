import React, { useState } from "react";
import { QueryClientProvider, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import "./ChatInterface.css";

export const BASE_API_URL = "http://127.0.0.1:5602/";

const fetchMessage = async (input) => {
  const url = `${BASE_API_URL}/query?text=${input}`;
  const response = await axios.get(url);
  return response.data;
};

export default function Chat() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(fetchMessage, {
    onSuccess: (data) => {
      setIsLoading(false);
      setInput("");
      queryClient.setQueryData("messages", (oldData) => {
        if (oldData) {
          return [data, ...oldData];
        }
        return [data];
      });
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setIsLoading(true);

      const inputData = {
        sender: "user",
        content: input,
      };
      queryClient.setQueryData("messages", (oldData) => {
        if (oldData) {
          return [inputData, ...oldData];
        }
        return [inputData];
      });

      mutation.mutate(input);
    }
  };

  const messages = queryClient.getQueryData("messages") || [];
  console.log("messages", messages);

  return (
    <div className="chat-wrapper">
      <div className="chat-interface">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-input-form">
          {isLoading && <div>thinking...</div>}
          {!isLoading && (
            <input
              type="text"
              value={input}
              onChange={handleChange}
              className="chat-input"
              placeholder="Ask your question about Zdenek..."
            />
          )}
        </form>
      </div>
    </div>
  );
}
