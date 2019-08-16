import { Component, Input } from '@angular/core';

@Component({
    selector: 'ac-number-list',
    templateUrl: './number-list.component.html',
    styles: ['.btn-delete { float: right; }']
})
export class NumberListComponent {
    @Input() items: number[];
    @Input() tips: string[] = [];
    @Input() minCount: number = 0;
    @Input() step: number = 1;

    add() {
        this.items.push(0);
    }

    delete(index: number) {
        if (index > this.minCount - 1) {
            this.items.splice(index, 1);
        }
    }

    customTrackBy(index: number, obj: number) {
        return index;
    }

}