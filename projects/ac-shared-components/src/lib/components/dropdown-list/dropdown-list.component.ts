import { Component, Input } from '@angular/core';

@Component({
    selector: 'ac-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styles: ['.btn-group { float: right; } .input-sm { width: 100px; }']
})
export class DropdownListComponent {
    @Input() items: any[];
    @Input() values: string[];
    @Input() numberValues: boolean = false;

    add() {
        if (this.numberValues) {
            this.items.push(0);
        } else {
            this.items.push("");
        }
    }

    delete(index: number) {
        this.items.splice(index, 1);
    }

    onSelect(index: number, itemIndex: number): void {
        if (this.numberValues) {
            this.items[itemIndex] = index;
        } else {
            this.items[itemIndex] = this.values[index];
        }
        console.log(this.items);
    }

    customTrackBy(index: number, obj: string) {
        return index;
    }

}