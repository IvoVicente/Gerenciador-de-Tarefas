import { Tarefa } from '../models/tarefa';

export const TAREFAS_MOCK: Tarefa[] = [
  {
    id: 1,
    titulo: 'Organização da Estrutura',
    descricao: 'vendo com o vai ficar as pastas',
    concluida: true,
  },

  {
    id: 2,
    titulo: 'Projeto em Angular',
    descricao: 'fazer o esqueleto do projeto em Angular',
    concluida: false,
  },

  {
    id: 3,
    titulo: 'Conectar a API',
    descricao: 'Pegar o Back dos meninos para testar',
    concluida: false,
  },
];
