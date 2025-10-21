import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  colour: string = 'purple';

  todoItems: any[] = [
    { id: 1, description: 'Item Description 1', completed: false },
    { id: 2, description: 'Item Description 2', completed: true },
    { id: 3, description: 'Item Description 3', completed: false }
  ];

  getTodoItems() : any[] {
    return this.todoItems;
  }
}
