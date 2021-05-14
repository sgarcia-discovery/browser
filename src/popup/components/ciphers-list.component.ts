import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

import { CipherType } from 'jslib/enums/cipherType';

import { CipherView } from 'jslib/models/view/cipherView';

@Component({
    selector: 'app-ciphers-list',
    templateUrl: 'ciphers-list.component.html',
})
export class CiphersListComponent {
    @Output() onSelected = new EventEmitter<CipherView>();
    @Output() launchEvent = new EventEmitter<CipherView>();
    @Output() onView = new EventEmitter<CipherView>();
    @Input() ciphers: CipherView[];
    @Input() showView = false;
    @Input() title: string;

    cipherType = CipherType;
    parentScroll: Element;
    containerHeight: number;
    itemHeight: number = 45;    // Height in px of each cipher row

    constructor() {
        this.parentScroll = document.querySelector("content");
    }

    ngOnChanges() {
        this.containerHeight = this.ciphers != null ? this.itemHeight * this.ciphers.length : 0;
    }

    selectCipher(c: CipherView) {
        this.onSelected.emit(c);
    }

    launchCipher(c: CipherView) {
        this.launchEvent.emit(c);
    }

    viewCipher(c: CipherView) {
        this.onView.emit(c);
    }
}
