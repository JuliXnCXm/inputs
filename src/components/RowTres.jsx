import React from 'react'

const RowTres = () => {
  const [disabled, setDisabled] = React.useState(false)

  const handleClick = () => {
    setDisabled(!disabled)
  }

  const title = `<Input disabled />`;

  return (
    <div className="row_tres_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input
          type="text"
          onClick={handleClick}
          disabled={disabled}
          placeholder="Placeholder"
        />
      </div>
    </div>
  );
}

export default RowTres