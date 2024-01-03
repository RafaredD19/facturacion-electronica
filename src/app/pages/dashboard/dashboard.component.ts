import { Component } from '@angular/core';
import { TablePaginationComponent } from '../../components/table-pagination/table-pagination.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TablePaginationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
