import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-fount',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './not-fount.component.html',
  styleUrl: './not-fount.component.scss'
})
export class NotFountComponent {

}
