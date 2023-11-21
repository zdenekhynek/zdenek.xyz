import { useEffect } from "react";

export default function useExternalScripts({ url = "", scriptString = "" }) {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    if (url) {
      script.setAttribute("src", url);
    } else if (scriptString) {
      script.innerHTML = scriptString;
    }

    if (head) {
      head.appendChild(script);
    }

    return () => {
      if (head) {
        head.removeChild(script);
      }
    };
  }, [url, scriptString]);
}
