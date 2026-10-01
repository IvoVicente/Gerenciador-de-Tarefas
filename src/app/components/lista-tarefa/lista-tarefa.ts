import { Component, computed, signal } from '@angular/core';
import { TarefaItem } from '../tarefa-item/tarefa-item';
import { Tarefas } from '../../models/tarefa';
import { TAREFAS_MOCK } from '../../mocks/tarefa.mock';

@Component({
  selector: 'app-lista-tarefa',
  imports: [TarefaItem],
  templateUrl: './lista-tarefa.html',
  styleUrl: './lista-tarefa.css',
})
export class ListaTarefa {
  readonly tarefas = signal<Tarefas[]>(TAREFAS_MOCK);

  readonly pendentes = computed (()=>
  this.tarefas().filter(t => !t.concluida).length
  );

  readonly total = computed(() => this.tarefas().length);

}
