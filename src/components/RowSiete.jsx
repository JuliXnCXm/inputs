import React from 'react'
import InputGroup from "react-bootstrap/InputGroup";

const RowSiete = () => {

const title = `<Input size=”sm” />`;
const title2 = `<Input size=”md” />`;

  return (
    <div className="row_siete_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input className="size-sm" type="text" placeholder="Placeholder" />
      </div>
      <div className="input--container">
        <h3>{title2}</h3>
        <span>Label</span>
        <input className="size-md" type="text" placeholder="Placeholder" />
      </div>
    </div>
  );
}

export default RowSiete;