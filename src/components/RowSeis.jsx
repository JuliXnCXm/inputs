import React from 'react'

const RowSeis = () => {
  const [text, setText] = React.useState("text")

  const title = `<Input value=${text} />`;
  return (
    <div className="row_seis_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <input type="text" value={text}/>
      </div>
    </div>
  );
}

export default RowSeis;