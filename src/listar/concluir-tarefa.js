import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function ConcluirTarefa(props) {

    const [exibirModal, setExibirModal] = useState(false)
    function handleAbrirModal(event) {
        event.preventDefault();
        setExibirModal(true);

    }
    function handleFecharModal(){

    }
    function handleConcluirTarefa(){
        
    }

    return (
        <span className={props.className}>
            <Button className="btn-sm"
                onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faClipboardCheck} />
            </Button>
        </span>
        <Modal show={exibirModal} onHide={handleFecharModal}>
            <Modal.Header closeButton>
                <Modal.Title>Conclui Tarefa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Deseja realmente concluir a seguinte tarefa
                <br />
                <strong>
                    {props.tarefa.nome}
                </strong>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                    onClick={handleConcluirTarefa}
                    data-testid="btn-concluir"
                >
                    Sim
                </Button>
                <Button variant="light"
                    onclick={hadleFecharModal}
                    data-testid="btn-fechar-modal"
                >
                    não
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConcluirTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarrgarTarefas: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}
export default ConcluirTarefa