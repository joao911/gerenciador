import React from 'react';
import ProTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

function ItensListaTarefas(props) {
    function marcarConcluida(tarefa) {
        return tarefa.concluida ? 'line-though' : 'none'
    }

    return (
        props.tarefas.map(tarefa =>
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%"
                    data-testid="nome-tarefa"
                    style={{ textDecoration: marcarConcluida(tarefa) }}
                >
                    {tarefa.nome}
                </td>
                <td className="text-right">
                    <A href={"/atalizar" + tarefa.id}
                        className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </A>
                </td>

            </tr>
        )
    );
}
ItensListaTarefas.roTypes = {
    tarefas: ProTypes.array.isRequired,
    recarregarTarefas: ProTypes.func.isRequired
};

export default ItensListaTarefas;