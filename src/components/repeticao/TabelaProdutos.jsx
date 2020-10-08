import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {
    const produtosList = produtos.map(produto => {
        return <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
    })
    return (
        <table border="1">
            <tr>
                <td>Id</td>
                <td>Nome do produto</td>
                <td>Preço</td>
            </tr>
            {produtosList}
        </table>
    )
}