import { Box, Heading } from "grommet";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { languages, findColor } from "../../languages";
import { findTextColor } from "../../utils";

export function View({ location }: RouteComponentProps) {
  const key = location.pathname.replace("/", "");
  const language = languages.find(language => language.key === key);
  if (language) {
    const color = findColor(language);
    return (
      <Box pad="large" background={{ color }}>
        <Heading color={findTextColor(color)}>{language.name}</Heading>
      </Box>
    );
  } else {
    return <div>Not found!</div>;
  }
}
