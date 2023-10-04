import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { ErrorMsgComponent } from './input-password/error-msg/error-msg.component';

@NgModule({
    declarations: [
        AppComponent,
        InputPasswordComponent,
        ErrorMsgComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{ }
