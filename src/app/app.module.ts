import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalculadoraModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
