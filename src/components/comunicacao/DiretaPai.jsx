import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Nathalia" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Otávio" idade={5} nerd={false}></DiretaFilho>
        </div>
    )
}