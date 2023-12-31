import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
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
  collapsed: boolean = false
  screenWidth: number = 0
  navData: any[] = navbarData

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.screenWidth = window.innerWidth;
  //   if (this.screenWidth <= 768) {
  //     this.collapsed = false
  //     this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  //   }
  // }

  // ngOnInit(): void {
  //   this.screenWidth = window.innerWidth;
  // }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }

  closeSidenav(): void {
    this.collapsed = true;
    this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed })
  }
}
