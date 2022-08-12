const $ = document.querySelector.bind(document)
function contador(){

    const html  = {
        Tela: $('.numeros'),
        Adiciona: $('.adiciona'),
        Retira: $('.retira')
    }
    let numeroInicial = 0

    function NumInicial(){
        const inicio = html.Tela
        inicio.innerHTML = `<h1>${numeroInicial}</h1>`
    }
    function Adicionar(){
        const mais = html.Adiciona
        mais.onclick = (()=>{
            numeroInicial++
            NumInicial()
        })
    }
    function Retirar(){
        const menos = html.Retira
        menos.onclick =(() => {
            numeroInicial--
            NumInicial()
        })
    }
    function init(){
        NumInicial()
        Adicionar()
        Retirar()
    }
    init()
}
contador()