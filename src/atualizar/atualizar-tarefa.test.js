import React from 'react'
import ReactDom from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa'
import { interceptRoute } from 'hookrouter';

describe('teste do componente de atualização de tarefas',()=>{
    it('deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDom.render(<AtualizarTarefa id={1}/>, div);
        ReactDom.unmountComponentAtNode(div)
    });
});