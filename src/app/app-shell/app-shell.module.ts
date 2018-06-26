import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppShellComponent } from './app-shell.component';

@NgModule({
    declarations: [
        AppShellComponent
    ],
    exports: [
        AppShellComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class AppShellModule { }
