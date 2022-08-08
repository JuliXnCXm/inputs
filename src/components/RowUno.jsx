import React from 'react'

const RowUno = () => {

    const title = `<Input />`;
    const title2 = `&:hover`;
    const title3 = `&:focus`;

  return (
    <div className="row_uno_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input type="text" placeholder="Placeholder" />
      </div>
      <div className="input--container input--hover">
        <h3>{title2}</h3>
        <span>Label</span>
        <input type="text" placeholder="Placeholder" id="input--hover" />
      </div>
      <div className="input--container input--focus">
        <h3>{title3}</h3>
        <span>Label</span>
        <input type="text" placeholder="Placeholder" />
      </div>
    </div>
  );
}

export default RowUno