import React from 'react';
import ReactDom from 'react-dom';
import ListarTarefas from './listar-tarefas'
import { interceptRoute } from 'hookrouter';

describe('teste do componente de listagem de tarefas',()=>{
    it('deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDom.render(<ListarTarefas/>, div);
        ReactDom.unmountComponentAtNode(div);
    });
});