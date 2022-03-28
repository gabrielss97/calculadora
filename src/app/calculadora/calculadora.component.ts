import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    this.operacao
      ? (this.numero2 = this.concatenarNumero(this.numero2, numero))
      : (this.numero1 = this.concatenarNumero(this.numero1, numero));
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    numAtual === '0' || numAtual === null ? (numAtual = '') : null;

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    this.operacao === null ? (this.operacao = operacao) : operacao;

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        +this.numero1,
        +this.numero2,
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      +this.numero1,
      +this.numero2,
      this.operacao
    );
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    } else if (this.numero2 !== null) {
      return this.numero2;
    } else {
      return this.numero1;
    }
  }
}
