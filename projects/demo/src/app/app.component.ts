import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  column = ['column1', 'column2', 'column3']
  row = [['row0', 'row0', 'row0'], ['row1', 'row1', 'row1'], ['row2', 'row2', 'row2'], ['row3', 'row3', 'row3'], ['row4', 'row4', 'row4'],]
}
