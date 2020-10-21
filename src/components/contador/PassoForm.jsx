import React from 'react'

export default props => {
    return (
        <div>
            <labeL htmlFor="passoInput">Passo:</labeL>
            <input id="passoInput" type="number" value={props.passo} onChange={e => props.setPasso(+e.target.value)}></input>
        </div>
    )
}