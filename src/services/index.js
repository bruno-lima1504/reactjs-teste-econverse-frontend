import axios from "axios";

// url: https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

export  const api = axios.create({
    baseURL: 'https://app.econverse.com.br/'
})

