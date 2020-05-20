import React from 'react'
import ReactDom from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa'
import Tarefa from '../models/tarefa.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe('teste do componente de atualização de tarefas', () => {

    const tarefaId = 1;
    const tarefa = new Tarefa(tarefaId, 'Nova Tarefa', false);

    beforeEach(() => {
        localStorage['tarefas'] = JSON.stringify([tarefa]);
    });

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDom.render(<AtualizarTarefa id={tarefaId} />, div);
        ReactDom.unmountComponentAtNode(div)
    });
    it('deve exibir o modal de sucesso ao atualizar a tarefa',()=>{
        const {getByTestId} = render(<AtualizarTarefa id={tarefaId}/>);
        fireEvent.click(getByTestId('btn-atualizar'));
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
    })
    it('deve atualizar uma tarefa',()=>{
        const nomeTarefaAtualizada = 'tarefa atualizada'
        const {getByTestId} = render(<AtualizarTarefa id={tarefaId}/>);
        fireEvent.change(getByTestId('txt-tarefa'), {target: {value: nomeTarefaAtualizada}});
        fireEvent.click(getByTestId('btn-atualizar'));
        const tarefasDb = JSON.parse(localStorage['tarefas']);
        expect(tarefasDb[0].nome).toBe(nomeTarefaAtualizada);
    })
});