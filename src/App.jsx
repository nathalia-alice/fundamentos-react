import './App.css'
import React from 'react'

import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
            <Card titulo="#5 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira" />
            </Card>

            <Card titulo="#4 - Desafio aleatório" color="#FA6900">
                <Aleatorio max={10} min={1} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)
