import React from "react";
import { DataTable } from "grommet";
import { Link } from "react-router-dom";

import { languages } from "../../languages";

const columns = [{ property: "name", header: "Name" }];

export function Browse() {
  return (
    <div className="Browse">
      <DataTable
        columns={columns}
        data={languages.map(({ name, key }) => {
          return { name: <Link to={key}>{name}</Link> };
        })}
        sortable
      />
    </div>
  );
}
