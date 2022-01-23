import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class TabularviewService {
    constructor() { }
}
TabularviewService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TabularviewService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TabularviewComponent {
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

class TabularviewModule {
}
TabularviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabularviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewModule, declarations: [TabularviewComponent], imports: [CommonModule,
        FormsModule], exports: [TabularviewComponent] });
TabularviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewModule, imports: [[
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TabularviewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabularviewComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        TabularviewComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of tabularview
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TabularviewComponent, TabularviewModule, TabularviewService };
//# sourceMappingURL=tabularview.mjs.map
