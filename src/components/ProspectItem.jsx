import React from "react";

export default function ProspectItem({
  prospectRank,
  prospectName,
  prospectPosition,
  prospectLevel,
}) {
  return (
    <tr>
      <td>{prospectRank}</td>
      <td>{prospectName}</td>
      <td>{prospectPosition}</td>
      <td>{prospectLevel}</td>
    </tr>
  );
}
