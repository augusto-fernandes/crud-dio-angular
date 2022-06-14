import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text ='HelLo WorLd!';
  date = Date();
  pessoa = {
    nome:'Augusto',
    idade: '20',
    profissao: 'desenvolvedor'
  };
  nomes = [ ]
  constructor( private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text);
  }

  mudaValor(){
    this.text='novo texto';
  }

  add(text: string){
    this.nomes.push(text);
  }

}
