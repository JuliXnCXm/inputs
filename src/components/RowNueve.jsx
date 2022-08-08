import React from 'react'

const RowNueve = () => {
  const title = `<Input multiline row=”4” />`;
  return (
    <div className="row_nueve_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <textarea type="text" placeholder="Placeholder" rows="4" />
      </div>
    </div>
  );
}

export default RowNueve