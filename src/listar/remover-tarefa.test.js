import React from 'react';
import ReactDom from 'react-dom';
import RemoverTarefa from './remover-tarefa';
import Tarefa from '../models/tarefa.model';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('Teste do componente de remo ção de tarefas',()=>{

    const nomeTarefa = 'Tarefa de teste';
    const tarefa = new Tarefa(1, nomeTarefa, false);

    it('Deve renderizar o componente sem erros',()=>{
        const div = document.createElement('div');
        ReactDom.render(
            <RemoverTarefa
            tarefa={tarefa}
            recarregarTarefas={()=>false}
            />, (div)
        )
        ReactDom.unmountComponentAtNode(div);
    })
})