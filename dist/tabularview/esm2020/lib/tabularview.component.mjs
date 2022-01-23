import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class TabularviewComponent {
    constructor() {
        this.column = [];
        this.row = [];
        this.searchedText = '';
        this.lastSort = { direction: '', index: 0 };
        this.listOfColumns = ['Name', 'Age', 'Address'];
        this.Data = [
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
        this.listOfData = this.Data;
    }
    ngOnInit() {
        console.log(this.column, this.row);
        if (this.column.length > 0) {
            this.listOfColumns = this.column;
        }
        if (this.row.length > 0) {
            this.Data = this.row;
            this.listOfData = this.Data;
        }
    }
    getNewDirection(i) {
        let value = 'asc';
        if (i === this.lastSort.index) {
            if (this.lastSort.direction == '') {
                value = 'asc';
            }
            if (this.lastSort.direction == 'asc') {
                value = 'des';
            }
        }
        return value;
    }
    arrayMove(arr, oldIndex, newIndex) {
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    }
    ;
    sort(column, index) {
        const newDirection = this.getNewDirection(index);
        let currentIndex, nextIndex;
        let switching = true;
        let shouldSwitch = false;
        while (switching) {
            switching = false;
            for (let i = 0; i < (this.Data.length - 1); i++) {
                currentIndex = i;
                nextIndex = i + 1;
                shouldSwitch = false;
                if (newDirection == "asc") {
                    if (JSON.stringify(this.Data[i][index]).toLowerCase() > JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (newDirection == "des") {
                    if (JSON.stringify(this.Data[i][index]).toLowerCase() < JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                this.Data = this.arrayMove(this.Data, currentIndex, nextIndex);
                switching = true;
            }
        }
        this.lastSort = { direction: newDirection, index: index };
        console.log(this.Data, column, index);
    }
    search(e) {
        console.log(e);
        this.searchedText = e;
        var listOfDisplayData = this.Data.filter((item) => JSON.stringify(item).toLowerCase().includes(this.searchedText.toLowerCase()));
        if (this.searchedText == '') {
            this.listOfData = this.Data;
        }
        else {
            this.listOfData = listOfDisplayData;
        }
    }
}
TabularviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabularviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TabularviewComponent, selector: "lib-tabularview", inputs: { column: "column", row: "row" }, ngImport: i0, template: `
    <div style="margin: 10px">
        <div style="float: right;margin:10px 0px">
            <input class="search" type="text" nz-input (ngModelChange)="search($event)" [ngModel]="searchedText"
                placeholder="Search" />
            <!-- (ngModelChange)[ngModel] -->
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
      </div>`, isInline: true, styles: ["table{width:100%;table-layout:fixed}.tbl-header{background-color:#ffffff4d}.tbl-content{max-height:82vh;overflow-x:auto;margin-top:0;border:.1px solid #B7b7b7}th{padding:15px;text-align:left;font-weight:500;font-size:14px;color:#404b69;text-transform:capitalize;background-color:#efe9fb;border:.1px solid #B7b7b7}td{padding:15px;text-align:left;vertical-align:middle;font-weight:400;font-size:12px;color:#404b69;border-bottom:.5px solid #B7b7b7}@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);body{font-family:Roboto,sans-serif}section{margin:50px}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.search:focus-visible{outline:.5px solid #C3B7E4}.search{height:32px;width:300px;border-radius:2px;border:.5px solid #B7b7b7}\n"], directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tabularview',
                    template: `
    <div style="margin: 10px">
        <div style="float: right;margin:10px 0px">
            <input class="search" type="text" nz-input (ngModelChange)="search($event)" [ngModel]="searchedText"
                placeholder="Search" />
            <!-- (ngModelChange)[ngModel] -->
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
                }]
        }], propDecorators: { column: [{
                type: Input,
                args: ['column']
            }], row: [{
                type: Input,
                args: ['row']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFidWxhcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFidWxhcnZpZXcvc3JjL2xpYi90YWJ1bGFydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUEyR3pELE1BQU0sT0FBTyxvQkFBb0I7SUF4R2pDO1FBMEdtQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQUcsR0FBZSxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsU0FBSSxHQUFHO1lBQ0w7Z0JBQ0UsWUFBWTtnQkFDWixFQUFFO2dCQUNGLDBCQUEwQjthQUMzQjtZQUNEO2dCQUNFLFdBQVc7Z0JBQ1gsRUFBRTtnQkFDRix3QkFBd0I7YUFDekI7WUFDRDtnQkFDRSxXQUFXO2dCQUNYLEVBQUU7Z0JBQ0Ysd0JBQXdCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsU0FBUztnQkFDVCxFQUFFO2dCQUNGLHdCQUF3QjthQUN6QjtTQUNGLENBQUM7UUFDRixlQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQThFeEI7SUE3RUMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ2xDO1FBQ0QsSUFBRyxJ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USxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQWdDQztvQkFDWCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1FUixDQUFDO2lCQUNIOzhCQUdrQixNQUFNO3NCQUF0QixLQUFLO3VCQUFDLFFBQVE7Z0JBQ0QsR0FBRztzQkFBaEIsS0FBSzt1QkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYnVsYXJ2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAxMHB4XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogcmlnaHQ7bWFyZ2luOjEwcHggMHB4XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIG56LWlucHV0IChuZ01vZGVsQ2hhbmdlKT1cInNlYXJjaCgkZXZlbnQpXCIgW25nTW9kZWxdPVwic2VhcmNoZWRUZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgICA8IS0tIChuZ01vZGVsQ2hhbmdlKVtuZ01vZGVsXSAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YmwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8dGFibGUgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgYm9yZGVyPVwiMFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgbGlzdE9mQ29sdW1uczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbHVtbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKGNsaWNrKT1cInNvcnQoY29sdW1uLGkpXCIgc3R5bGU9XCJ3aWR0aDogMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9zZW5waXBlci9pbWFnZS91cGxvYWQvdjE2NDI4ODcyNzUvYWxpZ24tdmVydGljYWwtdG9wX3FxOGF6Mi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic29ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YmwtY29udGVudFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGJvcmRlcj1cIjBcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBsaXN0T2ZEYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHN1YmRhdGEgb2YgZGF0YVwiPnt7IHN1YmRhdGEgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW2BcbiAgICB0YWJsZXtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIH1cbiAgICAudGJsLWhlYWRlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICB9XG4gICAgLnRibC1jb250ZW50e1xuICAgICAgbWF4LWhlaWdodDo4MnZoO1xuICAgICAgb3ZlcmZsb3cteDphdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjQjdiN2I3O1xuICAgIH1cbiAgICB0aHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNDA0YjY5O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmU5ZmI7XG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjQjdiN2I3O1xuICAgIH1cbiAgICB0ZHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNDA0YjY5O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0I3YjdiNztcbiAgICB9XG5cblxuICAgIC8qIGRlbW8gc3R5bGVzICovXG5cbiAgICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsMzAwLDcwMCk7XG4gICAgYm9keXtcbiAgICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyNWM0ODEsICMyNWI3YzQpO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjVjNDgxLCAjMjViN2M0KTsgKi9cbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgc2VjdGlvbntcbiAgICAgIG1hcmdpbjogNTBweDtcbiAgICB9XG5cbiAgICAvKiBmb3IgY3VzdG9tIHNjcm9sbGJhciBmb3Igd2Via2l0IGJyb3dzZXIqL1xuXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgfSBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgfSBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgfVxuICAgIC5zZWFyY2g6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICAgIG91dGxpbmU6IDAuNXB4IHNvbGlkICNDM0I3RTQ7XG4gICAgfVxuICAgIC5zZWFyY2gge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNCN2I3Yjc7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJ1bGFydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdjb2x1bW4nKSBjb2x1bW46IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgncm93Jykgcm93OiBzdHJpbmdbXVtdID0gW107XG4gIHNlYXJjaGVkVGV4dCA9ICcnO1xuICBsYXN0U29ydCA9IHsgZGlyZWN0aW9uOiAnJywgaW5kZXg6IDAgfTtcbiAgbGlzdE9mQ29sdW1ucyA9IFsnTmFtZScsICdBZ2UnLCAnQWRkcmVzcyddO1xuICBEYXRhID0gW1xuICAgIFtcbiAgICAgICdKb2huIEJyb3duJyxcbiAgICAgIDMyLFxuICAgICAgJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaydcbiAgICBdLFxuICAgIFtcbiAgICAgICdKaW0gR3JlZW4nLFxuICAgICAgNDIsXG4gICAgICAnTG9uZG9uIE5vLiAxIExha2UgUGFyaydcbiAgICBdLFxuICAgIFtcbiAgICAgICdKb2UgQmxhY2snLFxuICAgICAgMzIsXG4gICAgICAnU2lkbmV5IE5vLiAxIExha2UgUGFyaydcbiAgICBdLFxuICAgIFtcbiAgICAgICdKaW0gUmVkJyxcbiAgICAgIDMyLFxuICAgICAgJ0xvbmRvbiBOby4gMiBMYWtlIFBhcmsnXG4gICAgXSxcbiAgXTtcbiAgbGlzdE9mRGF0YSA9IHRoaXMuRGF0YTtcbiAgbmdPbkluaXQoKTogdm9pZCB7IFxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29sdW1uLCB0aGlzLnJvdylcbiAgICBpZiAodGhpcy5jb2x1bW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5saXN0T2ZDb2x1bW5zID0gdGhpcy5jb2x1bW47XG4gICAgfVxuICAgIGlmKHRoaXMucm93Lmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5EYXRhID0gdGhpcy5yb3c7XG4gICAgICB0aGlzLmxpc3RPZkRhdGEgPSB0aGlzLkRhdGE7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmV3RGlyZWN0aW9uKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlID0gJ2FzYydcbiAgICBpZiAoaSA9PT0gdGhpcy5sYXN0U29ydC5pbmRleCkge1xuICAgICAgaWYgKHRoaXMubGFzdFNvcnQuZGlyZWN0aW9uID09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gJ2FzYydcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxhc3RTb3J0LmRpcmVjdGlvbiA9PSAnYXNjJykge1xuICAgICAgICB2YWx1ZSA9ICdkZXMnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGFycmF5TW92ZShhcnI6IGFueSwgb2xkSW5kZXg6IGFueSwgbmV3SW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIHZhciBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoICsgMTtcbiAgICAgIHdoaWxlIChrLS0pIHtcbiAgICAgICAgYXJyLnB1c2godW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLnNwbGljZShuZXdJbmRleCwgMCwgYXJyLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgc29ydChjb2x1bW46IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHRoaXMuZ2V0TmV3RGlyZWN0aW9uKGluZGV4KTtcbiAgICBsZXQgY3VycmVudEluZGV4OiBhbnksIG5leHRJbmRleDogYW55O1xuICAgIGxldCBzd2l0Y2hpbmcgPSB0cnVlO1xuICAgIGxldCBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcbiAgICB3aGlsZSAoc3dpdGNoaW5nKSB7XG4gICAgICBzd2l0Y2hpbmcgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuRGF0YS5sZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGk7XG4gICAgICAgIG5leHRJbmRleCA9IGkgKyAxO1xuICAgICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PSBcImFzY1wiKSB7XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuRGF0YVtpXVtpbmRleF0pLnRvTG93ZXJDYXNlKCkgPiBKU09OLnN0cmluZ2lmeSh0aGlzLkRhdGFbaSArIDFdW2luZGV4XSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgc2hvdWxkU3dpdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdEaXJlY3Rpb24gPT0gXCJkZXNcIikge1xuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLkRhdGFbaV1baW5kZXhdKS50b0xvd2VyQ2FzZSgpIDwgSlNPTi5zdHJpbmdpZnkodGhpcy5EYXRhW2kgKyAxXVtpbmRleF0pLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRTd2l0Y2gpIHtcbiAgICAgICAgdGhpcy5EYXRhID0gdGhpcy5hcnJheU1vdmUodGhpcy5EYXRhLCBjdXJyZW50SW5kZXgsIG5leHRJbmRleClcbiAgICAgICAgc3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXN0U29ydCA9IHsgZGlyZWN0aW9uOiBuZXdEaXJlY3Rpb24sIGluZGV4OiBpbmRleCB9O1xuICAgIGNvbnNvbGUubG9nKHRoaXMuRGF0YSwgY29sdW1uLCBpbmRleClcbiAgfVxuXG4gIHNlYXJjaChlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHRoaXMuc2VhcmNoZWRUZXh0ID0gZTtcbiAgICB2YXIgbGlzdE9mRGlzcGxheURhdGEgPSB0aGlzLkRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hlZFRleHQudG9Mb3dlckNhc2UoKSkpO1xuICAgIGlmICh0aGlzLnNlYXJjaGVkVGV4dCA9PSAnJykge1xuICAgICAgdGhpcy5saXN0T2ZEYXRhID0gdGhpcy5EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZkRhdGEgPSBsaXN0T2ZEaXNwbGF5RGF0YTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==