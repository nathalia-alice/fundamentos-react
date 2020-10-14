import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
       nome = nomeParam
       idade  = idadeParam
       nerd = nerdParam
    }

    return (
        <div>
          <div>{nome}</div> 
          <div>{idade}</div> 
          <div>{nerd ? 'Verdadeiro': 'Falso'}</div> 
          <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}