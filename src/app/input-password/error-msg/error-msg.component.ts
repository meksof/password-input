import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error-msg',
    templateUrl: './error-msg.component.html'
})
export class ErrorMsgComponent
{
    @Input() isInvalid: boolean = false;
    @Input() errorLabel: string = '';
}
