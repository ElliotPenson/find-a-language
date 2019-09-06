import React from "react";

import { languages, findColor } from "../../languages";
import { findTextColor } from "../../utils";
import "./App.css";

export function App() {
  return (
    <div className="App">
      {languages.map(language => {
        const backgroundColor = findColor(language);
        return (
          <div
            className="App-language"
            style={{
              backgroundColor,
              color: findTextColor(backgroundColor)
            }}
          >
            {language.name}
          </div>
        );
      })}
    </div>
  );
}
