// gatsby-browser.js
const ReactDOM = require("react-dom");

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    console.log(
      "element",
      element,
      "container",
      container,
      "callback",
      callback
    );
    ReactDOM.createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
