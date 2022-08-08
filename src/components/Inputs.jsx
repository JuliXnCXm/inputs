import React from 'react'
import RowUno from './RowUno'
import RowDos from './RowDos'
import RowTres from './RowTres'
import RowCuatro from './RowCuatro'
import RowCinco from './RowCinco'
import RowSeis from './RowSeis'
import RowSiete from './RowSiete'
import RowOcho from './RowOcho'
import RowNueve from './RowNueve'
import './styles.css'

const Inputs = () => {

    return (
      <div className="main--container">
        <h1>Inputs</h1>
        <RowUno />
        <RowDos />
        <RowTres />
        <RowCuatro />
        <RowCinco />
        <RowSeis />
        <RowSiete />
        <RowOcho />
        <RowNueve />
        <h1 id="username">created by JuliXnCXm - devChallenges.io</h1>
      </div>
    );
}

export default Inputs