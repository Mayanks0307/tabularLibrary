import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class TabularviewComponent {
    constructor() {
        this.column = [];
        this.row = [];
        this.title = '';
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
                    if (typeof this.Data[i][index] == "string") {
                        if (JSON.stringify(this.Data[i][index]).toLowerCase() > JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else {
                        if (this.Data[i][index] > this.Data[i + 1][index]) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
                else if (newDirection == "des") {
                    if (typeof this.Data[i][index] == "string") {
                        if (JSON.stringify(this.Data[i][index]).toLowerCase() < JSON.stringify(this.Data[i + 1][index]).toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else {
                        if (this.Data[i][index] < this.Data[i + 1][index]) {
                            shouldSwitch = true;
                            break;
                        }
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
TabularviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TabularviewComponent, selector: "lib-tabularview", inputs: { column: "column", row: "row", title: "title" }, ngImport: i0, template: `
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
      </div>`, isInline: true, styles: ["table{width:100%;table-layout:fixed}.tbl-header{background-color:#ffffff4d}.tbl-content{max-height:82vh;overflow-x:auto;margin-top:0;border:.1px solid #B7b7b7}th{padding:15px;text-align:left;font-weight:500;font-size:14px;color:#404b69;text-transform:capitalize;background-color:#efe9fb;border:.1px solid #B7b7b7}td{padding:15px;text-align:left;vertical-align:middle;font-weight:400;font-size:12px;color:#404b69;border-bottom:.5px solid #B7b7b7}@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);body{font-family:Roboto,sans-serif}section{margin:50px}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.search:focus-visible{outline:.5px solid #C3B7E4}.search{height:32px;width:300px;border-radius:2px;border:.5px solid #B7b7b7}\n"], directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { column: [{
                type: Input,
                args: ['column']
            }], row: [{
                type: Input,
                args: ['row']
            }], title: [{
                type: Input,
                args: ['title']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFidWxhcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFidWxhcnZpZXcvc3JjL2xpYi90YWJ1bGFydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUE4R3pELE1BQU0sT0FBTyxvQkFBb0I7SUEzR2pDO1FBNkdtQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQUcsR0FBWSxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQyxTQUFJLEdBQUc7WUFDTDtnQkFDRSxZQUFZO2dCQUNaLEVBQUU7Z0JBQ0YsMEJBQTBCO2FBQzNCO1lBQ0Q7Z0JBQ0UsV0FBVztnQkFDWCxFQUFFO2dCQUNGLHdCQUF3QjthQUN6QjtZQUNEO2dCQUNFLFdBQVc7Z0JBQ1gsRUFBRTtnQkFDRix3QkFBd0I7YUFDekI7WUFDRDtnQkFDRSxTQUFTO2dCQUNULEVBQUU7Z0JBQ0Ysd0JBQXdCO2FBQ3pCO1NBQ0YsQ0FBQztRQUNGLGVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBNEZ4QjtJQTNGQyxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxN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QUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0SSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztTQUNyQztJQUNILENBQUM7O2lIQXpIVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixpSEF6R3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQW1DQzsyRkFzRUEsb0JBQW9CO2tCQTNHaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBbUNDO29CQUNYLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUVSLENBQUM7aUJBQ0g7OEJBR2tCLE1BQU07c0JBQXRCLEtBQUs7dUJBQUMsUUFBUTtnQkFDRCxHQUFHO3NCQUFoQixLQUFLO3VCQUFDLEtBQUs7Z0JBQ0ksS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYnVsYXJ2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAxMHB4O2ZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtmb250LXNpemU6IDI0cHg7YWxpZ24taXRlbXM6IGNlbnRlcjtkaXNwbGF5OiBmbGV4O2NvbG9yOiM0MDRiNjlcIj57e3RpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogcmlnaHQ7bWFyZ2luOjEwcHggMHB4XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBuei1pbnB1dCAobmdNb2RlbENoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiIFtuZ01vZGVsXT1cInNlYXJjaGVkVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8IS0tIChuZ01vZGVsQ2hhbmdlKVtuZ01vZGVsXSAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRibC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBib3JkZXI9XCIwXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBsaXN0T2ZDb2x1bW5zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29sdW1uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmbG9hdDogcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAoY2xpY2spPVwic29ydChjb2x1bW4saSlcIiBzdHlsZT1cIndpZHRoOiAxOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NlbnBpcGVyL2ltYWdlL3VwbG9hZC92MTY0Mjg4NzI3NS9hbGlnbi12ZXJ0aWNhbC10b3BfcXE4YXoyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRibC1jb250ZW50XCI+XG4gICAgICAgICAgICA8dGFibGUgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgYm9yZGVyPVwiMFwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGxpc3RPZkRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgc3ViZGF0YSBvZiBkYXRhXCI+e3sgc3ViZGF0YSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAgIHRhYmxle1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgfVxuICAgIC50YmwtaGVhZGVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgIH1cbiAgICAudGJsLWNvbnRlbnR7XG4gICAgICBtYXgtaGVpZ2h0Ojgydmg7XG4gICAgICBvdmVyZmxvdy14OmF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICNCN2I3Yjc7XG4gICAgfVxuICAgIHRoe1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM0MDRiNjk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZTlmYjtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkICNCN2I3Yjc7XG4gICAgfVxuICAgIHRke1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM0MDRiNjk7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQjdiN2I3O1xuICAgIH1cblxuXG4gICAgLyogZGVtbyBzdHlsZXMgKi9cblxuICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAsNzAwKTtcbiAgICBib2R5e1xuICAgICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNWM0ODEsICMyNWI3YzQpOyAqL1xuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICBzZWN0aW9ue1xuICAgICAgbWFyZ2luOiA1MHB4O1xuICAgIH1cblxuICAgIC8qIGZvciBjdXN0b20gc2Nyb2xsYmFyIGZvciB3ZWJraXQgYnJvd3NlciovXG5cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICB9IFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcbiAgICB9IFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcbiAgICB9XG4gICAgLnNlYXJjaDpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgb3V0bGluZTogMC41cHggc29saWQgI0MzQjdFNDtcbiAgICB9XG4gICAgLnNlYXJjaCB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0I3YjdiNztcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnVsYXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ2NvbHVtbicpIGNvbHVtbjogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCdyb3cnKSByb3c6IGFueVtdW10gPSBbXTtcbiAgQElucHV0KCd0aXRsZScpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgc2VhcmNoZWRUZXh0ID0gJyc7XG4gIGxhc3RTb3J0ID0geyBkaXJlY3Rpb246ICcnLCBpbmRleDogMCB9O1xuICBsaXN0T2ZDb2x1bW5zID0gWydOYW1lJywgJ0FnZScsICdBZGRyZXNzJ107XG4gIERhdGEgPSBbXG4gICAgW1xuICAgICAgJ0pvaG4gQnJvd24nLFxuICAgICAgMzIsXG4gICAgICAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ppbSBHcmVlbicsXG4gICAgICA0MixcbiAgICAgICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0pvZSBCbGFjaycsXG4gICAgICAzMixcbiAgICAgICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ppbSBSZWQnLFxuICAgICAgMzIsXG4gICAgICAnTG9uZG9uIE5vLiAyIExha2UgUGFyaydcbiAgICBdLFxuICBdO1xuICBsaXN0T2ZEYXRhID0gdGhpcy5EYXRhO1xuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gICAgY29uc29sZS5sb2codGhpcy5jb2x1bW4sIHRoaXMucm93KVxuICAgIGlmICh0aGlzLmNvbHVtbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxpc3RPZkNvbHVtbnMgPSB0aGlzLmNvbHVtbjtcbiAgICB9XG4gICAgaWYodGhpcy5yb3cubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLkRhdGEgPSB0aGlzLnJvdztcbiAgICAgIHRoaXMubGlzdE9mRGF0YSA9IHRoaXMuRGF0YTtcbiAgICB9XG4gIH1cblxuICBnZXROZXdEaXJlY3Rpb24oaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWUgPSAnYXNjJ1xuICAgIGlmIChpID09PSB0aGlzLmxhc3RTb3J0LmluZGV4KSB7XG4gICAgICBpZiAodGhpcy5sYXN0U29ydC5kaXJlY3Rpb24gPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSAnYXNjJ1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGFzdFNvcnQuZGlyZWN0aW9uID09ICdhc2MnKSB7XG4gICAgICAgIHZhbHVlID0gJ2RlcydcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgYXJyYXlNb3ZlKGFycjogYW55LCBvbGRJbmRleDogYW55LCBuZXdJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBpZiAobmV3SW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgdmFyIGsgPSBuZXdJbmRleCAtIGFyci5sZW5ndGggKyAxO1xuICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICBhcnIucHVzaCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcnIuc3BsaWNlKG5ld0luZGV4LCAwLCBhcnIuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBzb3J0KGNvbHVtbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5nZXROZXdEaXJlY3Rpb24oaW5kZXgpO1xuICAgIGxldCBjdXJyZW50SW5kZXg6IGFueSwgbmV4dEluZGV4OiBhbnk7XG4gICAgbGV0IHN3aXRjaGluZyA9IHRydWU7XG4gICAgbGV0IHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuICAgIHdoaWxlIChzd2l0Y2hpbmcpIHtcbiAgICAgIHN3aXRjaGluZyA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5EYXRhLmxlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaTtcbiAgICAgICAgbmV4dEluZGV4ID0gaSArIDE7XG4gICAgICAgIHNob3VsZFN3aXRjaCA9IGZhbHNlO1xuICAgICAgICBpZiAobmV3RGlyZWN0aW9uID09IFwiYXNjXCIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuRGF0YVtpXVtpbmRleF0gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuRGF0YVtpXVtpbmRleF0pLnRvTG93ZXJDYXNlKCkgPiBKU09OLnN0cmluZ2lmeSh0aGlzLkRhdGFbaSArIDFdW2luZGV4XSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuRGF0YVtpXVtpbmRleF0gPiB0aGlzLkRhdGFbaSArIDFdW2luZGV4XSkge1xuICAgICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV3RGlyZWN0aW9uID09IFwiZGVzXCIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuRGF0YVtpXVtpbmRleF0gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuRGF0YVtpXVtpbmRleF0pLnRvTG93ZXJDYXNlKCkgPCBKU09OLnN0cmluZ2lmeSh0aGlzLkRhdGFbaSArIDFdW2luZGV4XSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuRGF0YVtpXVtpbmRleF0gPCB0aGlzLkRhdGFbaSArIDFdW2luZGV4XSkge1xuICAgICAgICAgICAgICBzaG91bGRTd2l0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRTd2l0Y2gpIHtcbiAgICAgICAgdGhpcy5EYXRhID0gdGhpcy5hcnJheU1vdmUodGhpcy5EYXRhLCBjdXJyZW50SW5kZXgsIG5leHRJbmRleClcbiAgICAgICAgc3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXN0U29ydCA9IHsgZGlyZWN0aW9uOiBuZXdEaXJlY3Rpb24sIGluZGV4OiBpbmRleCB9O1xuICAgIGNvbnNvbGUubG9nKHRoaXMuRGF0YSwgY29sdW1uLCBpbmRleClcbiAgfVxuXG4gIHNlYXJjaChlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHRoaXMuc2VhcmNoZWRUZXh0ID0gZTtcbiAgICB2YXIgbGlzdE9mRGlzcGxheURhdGEgPSB0aGlzLkRhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hlZFRleHQudG9Mb3dlckNhc2UoKSkpO1xuICAgIGlmICh0aGlzLnNlYXJjaGVkVGV4dCA9PSAnJykge1xuICAgICAgdGhpcy5saXN0T2ZEYXRhID0gdGhpcy5EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZkRhdGEgPSBsaXN0T2ZEaXNwbGF5RGF0YTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==