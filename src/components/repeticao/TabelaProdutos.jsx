import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

    function getLinhas(){
        return produtos.map(produto => {
            return <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
        })
    }
   
    return (
        <table border="1">
            <tr>
                <td>Id</td>
                <td>Nome do produto</td>
                <td>Preço</td>
            </tr>
            {getLinhas()}
        </table>
    )
}