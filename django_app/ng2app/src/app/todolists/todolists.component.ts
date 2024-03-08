import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todolists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolists.component.html',
  styleUrl: './todolists.component.css'
})
export class TodolistsComponent {
  constructor(private todoService: TodoService) {}
  todos: Todo[] = [];
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
