import React from 'react';
import ReactDom from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';

describe('Teste do componente que exibe um item da listagem de tarefas', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);
    const tarefaConcluida = new Tarefa(2, nomeTarefa, true);

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDom.render(<ItensListaTarefas
            tarefas={[]}
            recarregarTarefas={() => false}
        />, div);
        ReactDom.unmountComponentAtNode(div)
    });

    it('Deve exibir a tarefa', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItensListaTarefas
                        tarefas={[tarefa]}
                        recarregarTarefas={() => false}
                    />
                </tbody>
            </table>
        );
        expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
    });
    it('deve exibir uma tarefa concluida', () => {
        const { getByTestId } = render(
          <table>
            <tbody>
              <ItensListaTarefas
                tarefas={[tarefaConcluida]}
                recarregarTarefas={() => false} />
            </tbody>
          </table>
        );
        expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
      });

});