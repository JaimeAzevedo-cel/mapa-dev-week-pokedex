/*
Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso  vamos precisar trabalhar com dois elementos
1- listagem
2- cartão do pokemon

Precisamos criar duas variaveis JS para trabalhar com elementos na tela.

Vamos precisar trabalar com evento de clique feito pelo usuário na listagem do pokemon

- Remover a classe aberto só do catão que está aberto
- Ao clicar em pokemon da listagem pegamos o Id desse pokemon para saber qual cartão mostrar
- Remover a classe ATIVO que marca o pokemon selecionado
- Adicionar a  classe ativo no item da lista clicado

*/

// criando duas variaveis para trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
    // evento de clique feito pelo usuário na listagem do pokemon

    pokemon.addEventListener('click', () => {
        // Remover a classe aberto só do catão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em pokemon da listagem pegamos o Id desse pokemon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- Remover a classe ATIVO que marca o pokemon selecionado
        const cartaoPokemonAtivo = document.querySelector('.ativo')
        cartaoPokemonAtivo.classList.remove('ativo')

        //- Adicionar a  classe ativo no item da lista clicado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})
