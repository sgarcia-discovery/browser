import {
    Component, OnChanges
} from '@angular/core';

import { CiphersListComponent } from './ciphers-list.component';

@Component({
    selector: 'app-ciphers-list-scroll',
    templateUrl: 'ciphers-list-scroll.component.html',
})
export class CiphersListScrollComponent extends CiphersListComponent implements OnChanges {

    parentScroll: Element;
    containerHeight: number;
    itemHeight: number = 45;    // Height in px of each cipher row

    constructor() {
        super();
        this.parentScroll = document.querySelector("content");
    }

    ngOnChanges() {
        this.containerHeight = this.ciphers != null ? this.itemHeight * this.ciphers.length : 0;
    }
}
