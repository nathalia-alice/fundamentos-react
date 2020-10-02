import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
            <Card titulo="#4 - Desafio aleatório">
                <Aleatorio max={10} min={1} />
            </Card>

            <Card titulo="#3 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)
