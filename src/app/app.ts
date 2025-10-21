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
  description: string = 'This is the list of items you have to do today.';

  todoItems: any[] = [
    { id: 1, description: 'Item Description 1', completed: false },
    { id: 2, description: 'Item Description 2', completed: true },
    { id: 3, description: 'Item Description 3', completed: false }
  ];

  getTodoItems(): any[] {
    return this.todoItems;
  }

  showMessage(): void {
    alert('Button clicked!');
  }
  
  edit(id: number): void {
    alert(`Edit item with ID: ${id}`);
  }

  delete(id: number): void {
    alert(`Delete item with ID: ${id}`);
  }
}
