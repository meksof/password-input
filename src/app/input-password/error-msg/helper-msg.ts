import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-helper-msg',
    templateUrl: './helper-msg.html'
})
export class HelperMsg
{
    @Input() isSatisfied: boolean = false;
    @Input() label: string = '';
}
