import { Component } from '@angular/core';
// import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from '../../models/board.model';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  // CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDrag, CdkDropList, DragDropModule, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
//Definição das tarefas
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('Tarefas', [
      'Desenvolver BackEnd',
      'Desenvolver FrontEnd',
      'Configuração do ambiente de desenvolvimento ',
    ]),
    new Column('Desenvolvendo', [
      'Ajustar Colunas',
      'Ajustar Título',
      'Aplicar Imagem de fundo',
    ]),
    new Column('Dificuldades', [
      'Importações',
      'Aplicar opacidade',
      'Implementar método Drag e Drop',
    ]),
    new Column('Concluído', ['Projeto Kanban']),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
