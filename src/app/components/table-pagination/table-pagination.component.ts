import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Quote } from '../../interfaces/quote';
import { TablePaginationData } from '../../interfaces/table-pagination';


@Component({
  selector: 'app-table-pagination',
  styleUrls: ['./table-pagination.component.scss'],
  templateUrl: './table-pagination.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class TablePaginationComponent implements AfterViewInit, OnChanges {
  @Input() desserts: Quote[] = []

  displayedColumns: string[] = ['id', 'dateIssue', 'customersName', 'workName'];
  dataSource: MatTableDataSource<TablePaginationData>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['desserts']) {
      const quotes = Array.from({ length: 100 }, (_, k) => parsedQuotes(k + 1, changes['desserts'].currentValue));
      this.dataSource = new MatTableDataSource(quotes);
    }
  }

  constructor() {
    const quotes = Array.from({ length: 100 }, (_, k) => parsedQuotes(k + 1, this.desserts));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(quotes);
  }

  ngAfterViewInit() {
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function parsedQuotes(n: number, quotes: Quote[]): TablePaginationData {
  const newQuotes = quotes.map(quote => {
    return {
      id: quote.id,
      dateIssue: quote.dateIssue,
      customersName: quote.customers.businessName,
      workName: quote.work.name,
      workDirection: quote.work.direction,
      vendorName: quote.vendor.name,
      money: quote.money,
      total: quote.total,
      state: quote.state,
    }
  })
  return newQuotes[n]
}