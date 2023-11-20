import React from "react";

export default function Section({ title = "Title", items = [] }) {
  return (
    <div className="section">
      <h2 className="h2">{title}</h2>
      <ul className="section__list">
        {items &&
          items.map((item, index) => {
            const { link, date, title, description, tech } = item;
            return (
              <li key={index} className="section__item">
                <div>
                  <span className="section__item__date">{date}</span>
                </div>
                <div>
                  <a
                    className="section__item__title"
                    href={link}
                    target="_blank"
                  >
                    {title}
                  </a>
                  {tech && Array.isArray(tech) && tech.length > 0 && (
                    <p className="section__item__tech">{tech.join(", ")}</p>
                  )}
                  {description && (
                    <p className="section__item__description">{description}</p>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
