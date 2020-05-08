import React from 'react';
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ListarTarefas() {
    return (
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                            <A href="/cadastrar"
                                className="btn btn-success btn-sm"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;
                                Nova Tarefa
                            </A>
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    );

};
export default ListarTarefas;
