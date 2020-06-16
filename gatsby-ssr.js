var React = require('react');

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {

  //  include google fonts
  setHeadComponents([
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Oswald:wght@600&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
  ]);
};
