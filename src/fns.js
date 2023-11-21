export function matchColorDarkScheme() {
  const mediaQuery = "(prefers-color-scheme: dark)";
  return window.matchMedia(mediaQuery);
}

export function getExplicitColorModePreference() {
  const preference = window.localStorage.getItem("theme");
  const hasExplicitPreference = typeof preference === "string";

  /**
   * If the user has explicitly chosen light or dark,
   * use it. Otherwise, this value will be null.
   */
  if (hasExplicitPreference) {
    return preference;
  }

  //  no explicit preference
  return null;
}

export function getImplicitColorModePreference() {
  // considering dark mode as default
  const mql = matchColorDarkScheme();
  const hasImplicitPreference = typeof mql.matches === "boolean";
  if (hasImplicitPreference) {
    return mql.matches ? "dark" : "light";
  }

  //  no implicit preference
  return null;
}

export function getColorModePreference() {
  const explicitPreference = getExplicitColorModePreference();
  if (explicitPreference) {
    return explicitPreference;
  }

  const implicitPreference = getImplicitColorModePreference();
  if (implicitPreference) {
    return implicitPreference;
  }

  //  no preference
  return null;
}

export function updateColorMode() {
  const colorMode = getColorModePreference();
  if (colorMode) {
    document.documentElement.setAttribute("data-theme", colorMode);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export function setExplicitColorMode(theme) {
  if (theme) {
    window.localStorage.setItem("theme", theme);
    updateColorMode();
  }
}

// our function needs to be a string
export const injectDarkModeScripts = `
  ${matchColorDarkScheme.toString()}
  ${getExplicitColorModePreference.toString()}
  ${getImplicitColorModePreference.toString()}
  ${getColorModePreference.toString()}
  ${updateColorMode.toString()}
  
  (function() {
      ${updateColorMode.name}();

      //  setup callback when OS color scheme preference changes
      var mql = ${matchColorDarkScheme.name}();
      mql.addEventListener("change", function(e) {
        ${updateColorMode.name}();
      });
  })()
`;
