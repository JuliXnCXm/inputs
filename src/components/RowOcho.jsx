import React from 'react'

const RowOcho = () => {
  const title = `<Input fullWidth />`;

  return (
    <div className="row_ocho_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input id="fullwidth" type="text" value="text" />
      </div>
    </div>
  );
}

export default RowOcho;