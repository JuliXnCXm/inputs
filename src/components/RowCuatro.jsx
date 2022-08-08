import React from 'react'

const RowCuatro = () => {

  const [input, setInput] = React.useState("")
  const [input2, setInput2] = React.useState("")

  const title = `<Input helperText=${input} />`;
  const title2 = `<Input helperText=${input2} error/>`;

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleChange2 = (e) => {
    setInput2(e.target.value)
  }


  return (
    <div className="row_cuatro_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input type="text" placeholder="Placeholder" onChange={handleChange} value={input} />
        <p>{input}</p>
      </div>
      <div className="input--container">
        <h3>{title2}</h3>
        <span id="error_text">Label</span>
        <input
          type="text"
          placeholder="Placeholder"
          onChange={handleChange2}
          id="error"
          value={input2}
        />
        <p id="error_text">{input2}</p>
      </div>
    </div>
  );
}

export default RowCuatro