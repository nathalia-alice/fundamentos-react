import React from 'react';

export default function Aleatorio(props){
    const ramdom = Math.floor(Math.random() * (props.max - props.min) ) + props.min;
    return (
        <div>
            <h3>{ramdom}</h3>
        </div>
    )
}