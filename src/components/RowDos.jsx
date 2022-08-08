import React from 'react'

const RowDos = () => {

  const title = `<Input error />`;
  const title2 = `&:hover`;
  const title3 = `&:focus`;

  return (
    <div className="row_dos_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span id="error_text">Label</span>
        <input type="text" placeholder="Placeholder" id="error" />
      </div>
      <div className="input--container input_hover_error">
        <h3>{title2}</h3>
        <span id="label_hover_error">Label</span>
        <input type="text" placeholder="Placeholder" id="with_hover_error" />
      </div>
      <div className="input--container input_focus_error">
        <h3>{title3}</h3>
        <span id="label_focus_error">Label</span>
        <input type="text" placeholder="Placeholder" id="with_focus_error" />
      </div>
    </div>
  );
}

export default RowDos