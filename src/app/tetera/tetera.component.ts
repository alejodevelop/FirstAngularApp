import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tetera',
  templateUrl: './tetera.component.html',
  styleUrls: ['./tetera.component.css']
})
export class TeteraComponent implements OnInit {

  teteras = ['china', 'japonesa', 'hindu', 'colombiana'];
  activado: boolean = true;
  name: string = 'Alejo Cabarcas';
  address: {
    street: string;
    city: string;
  };
  color: string;


  constructor() {
    this.address = {
      street: "the hills",
      city: "los angeles"
    }
    this.color = "";
  }

  handleActivado() {

    this.activado = !this.activado;
  }

  addTetera(newTetera: HTMLInputElement) {
    this.teteras.push(newTetera.value);
    newTetera.value = "";
    newTetera.focus();
    return false;
  }

  ngOnInit(): void {
  }

}
