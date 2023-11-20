import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Chat from "./chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/ask",
    element: <Chat />,
  },
  {
    path: "/about",
    //  skills/writing/reading/speaking
  },
  {
    path: "/skills",
  },
  {
    path: "/speaking",
    element: <Speaking />,
  },
  {
    path: "/writing",
  },
  {
    path: "/reading",
  },
]);

import Intro from "./intro";
import Speaking from "./speaking";

const queryClient = new QueryClient();

export default function UI() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

UI.propTypes = {};
