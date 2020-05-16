import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';

function ListarTarefas() {

    const ITENS_POR_PAGINA = 3;

    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefas, setCarregarTarefas] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenarDesc, setOrdenarDesc] = useState(false);
    const [orderAsc, setOrdernarAsc] = useState(false);

    useEffect(() => {
        function obeterTarefas() {
            const tarefasDb = localStorage['tarefas'];
            let listaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            //ordernar
            if(orderAsc){
                listaTarefas.sort((t1,t2)=>(t1.nome.toLowerCase() > t2.nome.toLowerCase()) ?1 : -1);
            }else if (ordenarDesc){
                listaTarefas.sort((t1,t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase()) ? -1 :1);
            }
            //paginar
            setTotalItems(listaTarefas.length);
            setTarefas(listaTarefas.splice((paginaAtual - 1) * ITENS_POR_PAGINA, ITENS_POR_PAGINA));
        }
        // se não foi carrgado carregar listartarefas
        if (carregarTarefas) {
            obeterTarefas();
            setCarregarTarefas(false);

        }
    }, [carregarTarefas, paginaAtual, orderAsc, ordenarDesc]);

    function handleMudarPagina(pagina) {
        setPaginaAtual(pagina);
        setCarregarTarefas(true);
    }

    function handleOrdenar(event){
        event.preventDefault();
        if(!orderAsc && !ordenarDesc){
            setOrdernarAsc(true);
            setOrdenarDesc(false);
        }else if(orderAsc){
            setOrdernarAsc(false);
            setOrdenarDesc(true);
        }else{
            setOrdernarAsc(false);
            setOrdenarDesc(false);
        }
        setCarregarTarefas(true);
    }

    return (
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>
                            <a href="/" onClick={handleOrdenar}>
                                Tarefa
                            </a>
                        </th>
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
                    <ItensListaTarefas
                        tarefas={tarefas}
                        recarregarTarefas={setCarregarTarefas}
                    />
                </tbody>
            </Table>
            <Paginacao
                totalItems={totalItems}
                itemsPorPagina={ITENS_POR_PAGINA}
                paginaAtual={paginaAtual}
                mudarPagina={handleMudarPagina}
            />
        </div>
    );

};
export default ListarTarefas;
