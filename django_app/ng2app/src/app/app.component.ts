import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgSwitchDefault } from '@angular/common';
import { TodolistsComponent } from './todolists/todolists.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, TodolistsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple Todo';
  subtitle = 'Angular2 + Django Rest Framework'
}
