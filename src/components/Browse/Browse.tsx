import React from "react";

import { languages } from "../../languages";
import { Language } from "../../types";

export function Browse() {
  return (
    <div className="Browse">
      {languages.map((language: Language) => {
        return <div>{language.name}</div>;
      })}
    </div>
  );
}
