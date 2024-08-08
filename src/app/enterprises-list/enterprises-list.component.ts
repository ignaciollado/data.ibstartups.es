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
 console.log (this.currentLang)
 this.getEnterprises()
}

getEnterprises() {
  this.enterpriseService.getAll()
    .subscribe( (enterprises: any) => {
      this.enterprises = enterprises
      console.log (enterprises)
    })
}
}
