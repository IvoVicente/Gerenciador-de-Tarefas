import { Injectable } from "@angular/core";
import { Tarefa } from "../models/tarefa";
import { TAREFAS_MOCK } from "../mocks/tarefa.mock";

@Injectable({providedIn: "root"})
export class TarefaService {
    obterTodos(): Tarefa[]{
        return TAREFAS_MOCK;
    }
}