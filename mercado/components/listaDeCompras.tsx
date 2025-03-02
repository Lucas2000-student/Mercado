import {Item} from '@/data/listaData'

//Definir o formato da interface de props, com o componente listaDeCompras 
//lista de itens (Array de Item)
type listaDeComprasProps ={
    itens: Item[]; //itens será um array do tipo 'Item'
}

function listaDeCompras(props: listaDeComprasProps){
    return(
        <>
        {/*Aqui estamos usando props.itens para acessar o array de itens que foi passado para o componente.
           Para cada Item, exibimos o nome e quantidade 'props'- nos permite "injetar" dados no componente.
           Conceito de props: "Propriedades" enviadas de um componente pai para um componente filho.*/}
        <h2>Lista de Compras</h2>
        {props.itens.map(function(item){
            return(
                <div key={item.id}>
                    <p>Produto: {item.nome}</p>
                    <p>Quantidade: {item.quantidade}</p>
                    <hr />
                </div>
            );
            }
        )}
        </>
    )
};
export default listaDeCompras;