import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../services/enpterprise.service';
import { EnterpriseDTO } from '../Models/enterprise.dto';

@Component({
  selector: 'app-enterprises-list',
  templateUrl: './enterprises-list.component.html',
  styleUrl: './enterprises-list.component.scss'
})
export class EnterprisesListComponent implements OnInit {
  currentLang: string = ""
  values: string = ""
  isListMode: boolean = false
  public enterprises: EnterpriseDTO[] = []

constructor(private enterpriseService: EnterpriseService) {}

ngOnInit(): void {
  switch (localStorage.getItem('preferredLang')) {
    case 'cat':
      this.currentLang = 'ca-ES'
      break
    case 'cas':
      this.currentLang = 'es-ES'      
      break
    case 'en':
      this.currentLang = 'en-EN'
      break
    default:
      this.currentLang = 'ca-ES'
 }
 this.getEnterprises()
}

getEnterprises() {
  this.enterpriseService.getAll()
    .subscribe( (enterprises: any) => {
      this.enterprises = enterprises
    })
}

filterList(e: any) {
  let cards = document.getElementsByClassName("col")

  Array.from(cards).forEach((card) => {
    card.classList.remove("ocultar")
    card.classList.remove("matchCard")
  })

 if(e.target.value.toUpperCase()) {
    Array.from(cards).forEach((card) => {
      if (!card.textContent.toUpperCase().includes(e.target.value.toUpperCase())) {
        card.classList.add("ocultar")
      } 
   })
  }

}

clearInput(){
  document.getElementById("searchName").innerText = ""
}

}
