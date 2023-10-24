import{test,expect,describe} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação',()=>{
    test('Espero que 1 seja igual a 1', ()=>{
        expect(1).toBe(1)
    })
})
describe('Cadastro de filmes', ()=>{
    test('Espero que o filme seja cadastrado',()=>{
        const filme = {
            titulo:'Vingadores',
            descricao:'Filme do herois da marvel'
            imagem:""
        }
        //Passar para API
        const resposta = axios.post('')
        //Esperar a API cadastrar o filme
    })
})