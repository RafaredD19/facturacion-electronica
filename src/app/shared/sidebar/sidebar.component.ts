import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';
import { MatIconModule } from '@angular/material/icon';
// Se necesita importar en los componentes que se desean usar
import { RouterModule } from '@angular/router';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})

export class SidebarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = true
  screenWidth: number = 0
  navData: any[] = navbarData

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

  closeSidenav(): void {
    this.collapsed = true
  }
}
