import React from "react";
import { DataTable } from "grommet";

import { languages } from "../../languages";

const columns = [{ property: "name", header: "Name" }];

export function Browse() {
  return (
    <div className="Browse">
      <DataTable columns={columns} data={languages} sortable />
    </div>
  );
}
