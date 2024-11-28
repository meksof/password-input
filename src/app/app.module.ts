import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { HelperMsg } from './input-password/error-msg/helper-msg';

@NgModule({
    declarations: [
        AppComponent,
        InputPasswordComponent,
        HelperMsg
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{ }
