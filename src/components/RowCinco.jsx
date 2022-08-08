import React from 'react'

const RowCinco = () => {

    const title = `<Input startIcon />`;
    const title2 = `<Input endIcon />`;

  return (
    <div className="row_cinco_container">
      <div className="input--container">
        <h3>{title}</h3>
        <span>Label</span>
        <div>
          <div className="icon--container">
            <span className="material-symbols-rounded" id="icon-right">
              call
            </span>
            <p id="placeholder">Placeholder</p>
          </div>
          <input type="text" />
        </div>
      </div>
      <div className="input--container">
        <h3>{title2}</h3>
        <span>Label</span>
        <div>
          <div className="icon--container" >
            <p id="placeholder">Placeholder</p>
            <span className="material-symbols-rounded" id="icon-left">
              lock
            </span>
          </div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default RowCinco;