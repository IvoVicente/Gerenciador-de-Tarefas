import { Component, input } from '@angular/core';
import { Tarefas } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa-item',
  imports: [],
  templateUrl: './tarefa-item.html',
  styleUrl: './tarefa-item.css',
})
export class TarefaItem {
  readonly tarefa = input.required<Tarefas>();
}
