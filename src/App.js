import React from 'react';
import {useRoutes} from 'hookrouter'
import './App.css';

import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa'

const routes ={
  '/': () => <ListarTarefas/>,
  '/cadastrar': ()=> <CadastrarTarefa/>,
  'atualizar/:id':({id}) => <AtualizarTarefa id ={id}/>,
}

function App() {
  return useRoutes(routes)
}

export default App;
