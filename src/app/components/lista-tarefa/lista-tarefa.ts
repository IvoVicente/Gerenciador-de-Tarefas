import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TarefaItem } from '../tarefa-item/tarefa-item';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.services';

@Component({
  selector: 'app-lista-tarefa',
  imports: [TarefaItem],
  templateUrl: './lista-tarefa.html',
  styleUrl: './lista-tarefa.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaTarefa {
  private readonly tarefaService = inject(TarefaService);

  readonly tarefas = signal<Tarefa[]>(this.tarefaService.obterTodos());

  readonly pendentes = computed(
    () => this.tarefas().filter((t) => !t.concluida).length,
  );

  readonly total = computed(() => this.tarefas().length);
}
