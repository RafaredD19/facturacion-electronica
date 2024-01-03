import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false)

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      route: 'dashboard',
      icon: 'home',
      label: 'Dashboard'
    },
    {
      route: 'reports',
      icon: 'key',
      label: 'Reportes'
    }
  ])

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
