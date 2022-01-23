import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TabularviewComponent implements OnInit {
    column: string[];
    row: string[][];
    searchedText: string;
    lastSort: {
        direction: string;
        index: number;
    };
    listOfColumns: string[];
    Data: (string | number)[][];
    listOfData: (string | number)[][];
    ngOnInit(): void;
    getNewDirection(i: number): string;
    arrayMove(arr: any, oldIndex: any, newIndex: number): any;
    sort(column: string, index: number): void;
    search(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabularviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabularviewComponent, "lib-tabularview", never, { "column": "column"; "row": "row"; }, {}, never, never>;
}
