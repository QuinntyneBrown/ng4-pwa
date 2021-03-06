import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId:"ng4-pwa"}),
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export * from "./environment";