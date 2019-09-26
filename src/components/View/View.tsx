import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { languages } from "../../languages";

export function View({ location }: RouteComponentProps) {
  const key = location.pathname.replace("/", "");
  const language = languages.find(language => language.key === key);
  if (language) {
    return <div className="Language">{language.name}</div>;
  } else {
    return <div>Not found!</div>;
  }
}
