import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CustomSidenavComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  constructor(
    private router: Router
  ) { }

  collapsed = signal(false)

  sidenavWitdh = computed(() => this.collapsed() ? '65px' : '250px');

  logout() {
    localStorage.clear();
    this.router.navigate([''])
  }
}
