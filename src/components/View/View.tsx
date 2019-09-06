import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getLanguage } from "../../languages";

export function View({ location }: RouteComponentProps) {
  const key = location.pathname.replace("/", "");
  const language = getLanguage(key);
  if (language) {
    return <div className="Language">{language.name}</div>;
  } else {
    return <div>Not found!</div>;
  }
}
