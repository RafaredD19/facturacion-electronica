import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../interfaces/quote';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  listQuotes: Quote[] = []
  constructor(private _quotesService: QuotesService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this._quotesService.findAllQuotesApi().subscribe({
      next: (v) => {
        this.listQuotes = v.data
        console.log(this.listQuotes)
      },
      error: (e) => {
        console.log(e)
        Swal.fire({
          width: 300,
          position: "bottom-end",
          icon: 'error',
          text: 'Se produjo un error al obtener cotizaciones. Por favor, inténtelo de nuevo más tarde.',
          showConfirmButton: false,
          timer: 2500
        });
      }
    })
  }
}
