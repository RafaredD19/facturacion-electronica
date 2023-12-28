import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { OperatingSystems } from '../../interfaces/user.interface';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() ocupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  username: string = "Juan Galarza";
  users: string[] = ['Juan', 'Luis', 'Bryan'];
  statusError: boolean = false;
  isEditable: boolean = true
  operatingSystems: OperatingSystems[] = [{ id: 1, name: "Juan" }, { id: 2, name: "Luis" }, { id: 3, name: "Bryan" }, { id: 4, name: "Rafael" }];

  onMouseOver(osName: string): void {
    console.log(osName)
  }

  emitToParent(): void {
    this.greet.emit("Hi! I'm your child");
  }
}
