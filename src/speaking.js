import React from "react";

const engagements = [
  {
    title: "Engaged and Outraged",
    date: "November 2019",
    description: "Datafest 2019 in Tbilisi.",
    recordingLink: "https://vimeo.com/464601186",
    presentationLink: null,
  },
  {
    title: "Spot fake Instagram profiles with TensorFlow.js",
    date: "November 2019",
    description: "AI Javascript London meet-up",
    recordingLink: null,
    presentationLink: null,
  },
  {
    title: "Quick and easy way to add AI to your CV",
    date: "September 2019",
    description: "JSDayIE in Dublin",
    recordingLink: null, // Assuming no recording available
    presentationLink: null,
  },
  {
    title: "Machine Learning in Javascript",
    date: "February 2019",
    description: "Applied AI conference in London",
    recordingLink: "https://vimeo.com/330347293",
    presentationLink: null,
  },
  {
    title: "Getting Started with TensorFlow.js",
    date: "February 2019",
    description: "AI Javascript London meet-up",
  },
  {
    title: "Visualisation with human touch",
    date: "May 2017",
    description: "Visualising Data London",
    recordingLink: null,
    presentationLink: null,
  },
  {
    title: "Mapping crime",
    date: "April 2014",
    description: " Data visualisations: Where data, design and technology meet politics",
    recordingLink: null,
    presentationLink: null,
  },
  {
    title: "Drugs, Guns and Sex",
    date: "February 2014",
    description: "CartoCon in Olomouc.",
    recordingLink: "https://vimeo.com/87926507",
    recordingLink: null,
    presentationLink: null,
  },
  // Add more engagements as needed
];

export default function Speaking() {
  return (
    <div className="section">
      <h2 className="h2">Speaking</h2>
      <ul className="section__list">
        {engagements.map((engagement, index) => (
          <li key={index}>
            <a
              className="section__item"
              href={engagement.recordingLink}
              target="_blank"
            >
              <span className="section__item__date">{engagement.date}</span>
              <span className="section__item__title">{engagement.title}</span>
              <span className="section__item__description">
                - {engagement.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
