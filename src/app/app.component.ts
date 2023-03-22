import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Articles } from './articles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAngular';
  articles: Articles[] = [
    {
        id: 1,
        title:"Gerando e aplicando migrations com .Net 6",
        data: "22/03",
        description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
        img:"../../assets/icons/NET_Core_Logo.svg.png"
      },
    {
        id: 2,
        title:"Gerando e aplicando migrations com .Net 6",
        data: "22/03",
        description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
        img:"../../assets/icons/NET_Core_Logo.svg.png"
    },
    
    {
      id: 3,
      title:"Gerando e aplicando migrations com .Net 6",
      data: "22/03",
      description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
      img:"../../assets/icons/NET_Core_Logo.svg.png"
  },
  
    {
      id: 4,
      title:"Gerando e aplicando migrations com .Net 6",
      data: "22/03",
      description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
      img:"../../assets/icons/NET_Core_Logo.svg.png"
    },
    {
        id: 5,
        title:"Gerando e aplicando migrations com .Net 6",
        data: "22/03",
        description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
        img:"../../assets/icons/NET_Core_Logo.svg.png"
    },
    {
        id: 6,
        title:"Gerando e aplicando migrations com .Net 6",
        data: "22/03",
        description:"Como gerar migrations a partidar de um modelo e aplicar para um banco de dados relacional",
        img:"../../assets/icons/NET_Core_Logo.svg.png"
  }
];
}
