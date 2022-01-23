import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'lib-tabularview',
  template: `
    <div style="margin: 10px;font-family: sans-serif">
        <div style="justify-content: space-between;display: flex;">
            <div style="text-transform: capitalize;font-size: 24px;align-items: center;display: flex;color:#404b69">{{title}}</div>
            <div style="float: right;margin:10px 0px">
                <input class="search" type="text" nz-input (ngModelChange)="search($event)" [ngModel]="searchedText"
                    placeholder="Search" />
                <!-- (ngModelChange)[ngModel] -->
            </div>
        </div>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th *ngFor="let column of listOfColumns; let i = index">
                            {{ column }}
                            <span style="float: right">
                                <img (click)="sort(column,i)" style="width: 18px"
                                    src="https://res.cloudinary.com/senpiper/image/upload/v1642887275/align-vertical-top_qq8az2.png"
                                    alt="sort" />
                            </span>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr *ngFor="let data of listOfData">
                        <td *ngFor="let subdata of data">{{ subdata }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>`,
  styles: [`
    table{
      width:100%;
      table-layout: fixed;
    }
    .tbl-header{
      background-color: rgba(255,255,255,0.3);
    }
    .tbl-content{
      max-height:82vh;
      overflow-x:auto;
      margin-top: 0px;
      border: 0.1px solid #B7b7b7;
    }
    th{
      padding: 15px;
      text-align: left;
      font-weight: 500;
      font-size: 14px;
      color: #404b69;
      text-transform: capitalize;
      background-color:#efe9fb;
    border: 0.1px solid #B7b7b7;
    }
    td{
      padding: 15px;
      text-align: left;
      vertical-align:middle;
      font-weight: 400;
      font-size: 12px;
      color: #404b69;
      border-bottom: 0.5px solid #B7b7b7;
    }


    /* demo styles */

    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
    body{
      /* background: -webkit-linear-gradient(left, #25c481, #25b7c4);
      background: linear-gradient(to right, #25c481, #25b7c4); */
      font-family: 'Roboto', sans-serif;
    }
    section{
      margin: 50px;
    }

    /* for custom scrollbar for webkit browser*/

    ::-webkit-scrollbar {
        width: 6px;
    } 
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
    .search:focus-visible {
        outline: 0.5px solid #C3B7E4;
    }
    .search {
        height: 32px;
        width: 300px;
        border-radius: 2px;
        border: 0.5px solid #B7b7b7;
    }
  `]
})
export class TabularviewComponent implements OnInit {

  @Input('column') column: string[] = [];
  @Input('row') row: any[][] = [];
  @Input('title') title: string = '';
  searchedText = '';
  lastSort = { direction: '', index: 0 };
  listOfColumns = ['Name', 'Age', 'Address'];
  Data = [
    [
      'John Brown',
      32,
      'New York No. 1 Lake Park'
    ],
    [
      'Jim Green',
      42,
      'London No. 1 Lake Park'
    ],
    [
      'Joe Black',
      32,
      'Sidney No. 1 Lake Park'
    ],
    [
      'Jim Red',
      32,
      'London No. 2 Lake Park'
    ],
  ];
  listOfData = this.Data;
  ngOnInit(): void { 
    console.log(this.column, this.row)
    if (this.column.length > 0) {
      this.listOfColumns = this.column;
    }
    if(this.row.length > 0){
      this.Data = this.row;
      this.listOfData = this.Data;
    }
  }

  getNewDirection(i: number): string {
    let value = 'asc'
    if (i === this.lastSort.index) {
      if (this.lastSort.direction == '') {
        value = 'asc'
      }
      if (this.lastSort.direction == 'asc') {
        value = 'des'
      }
    }
    return value;
  }

  arrayMove(arr: any, oldIndex: any, newIndex: number): any {
    if (newIndex >= arr.length) {
      var k = newIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
  };

  sort(column: string, index: number): void {
    const newDirection = this.getNewDirection(index);
    let currentIndex: any, nextIndex: any;
    let switching = true;
    let shouldSwitch = false;
    while (switching) {
      switching = false;
      for (let i = 0; i < (this.Data.length - 1); i++) {
        currentIndex = i;
        nextIndex = i + 1;
        shouldSwitch = false;
        if (newDirection == "asc") {
          if (typeof this.Data[i][index] == "string") {
            if (JSON.stringify(this.Data[i][index]).toLowerCase() > JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else {
            if (this.Data[i][index] > this.Data[i + 1][index]) {
              shouldSwitch = true;
              break;
            }
          }
        } else if (newDirection == "des") {
          if (typeof this.Data[i][index] == "string") {
            if (JSON.stringify(this.Data[i][index]).toLowerCase() < JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else {
            if (this.Data[i][index] < this.Data[i + 1][index]) {
              shouldSwitch = true;
              break;
            }
          }
        }
      }
      if (shouldSwitch) {
        this.Data = this.arrayMove(this.Data, currentIndex, nextIndex)
        switching = true;
      }
    }
    this.lastSort = { direction: newDirection, index: index };
    console.log(this.Data, column, index)
  }

  search(e: any): void {
    console.log(e)
    this.searchedText = e;
    var listOfDisplayData = this.Data.filter((item: any) => JSON.stringify(item).toLowerCase().includes(this.searchedText.toLowerCase()));
    if (this.searchedText == '') {
      this.listOfData = this.Data;
    } else {
      this.listOfData = listOfDisplayData;
    }
  }
}
