import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CustomersComponent } from "./components/customers/customers.component";
import { CommentsComponent } from './components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, UserComponent, CustomersComponent, CommentsComponent]
})
export class AppComponent {
  title = 'ElectronicBilling';
  city: string = "La Lema"
  userOcupation: string = "Dveloper"
  childsMessage: string = ""

  receiveEmition($event: string): void {
    this.childsMessage = $event
  }
}
