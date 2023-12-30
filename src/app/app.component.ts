import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CustomersComponent } from "./components/customers/customers.component";
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, UserComponent, CustomersComponent, CommentsComponent, HeaderComponent, SidebarComponent, DashboardComponent]
})
export class AppComponent {
  title = 'ElectronicBilling';
  city: string = "La Lema"
  userOcupation: string = "Dveloper"
  childsMessage: string = ""
  isSideNavCollapsed = false
  screenWidth = 0

  receiveEmition($event: string): void {
    this.childsMessage = $event
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }
}
