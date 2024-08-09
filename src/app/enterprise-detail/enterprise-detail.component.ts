import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseService } from '../services/enpterprise.service';
import { EnterpriseDTO } from '../Models/enterprise.dto';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrl: './enterprise-detail.component.scss'
})
export class EnterpriseDetailComponent {
  public id:string | null = this.route.snapshot.paramMap.get('id')
  public currentLang: string = ""
  public enterprises: EnterpriseDTO[] = []
  public enterprisesFiltered: EnterpriseDTO [] = []
  
  constructor(  private route: ActivatedRoute,
    private router: Router, private enterpriseService: EnterpriseService ) {  }
  
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
     this.getEnterpriseDetail()
    }

    getEnterpriseDetail() {
      this.enterpriseService.getAll()
        .subscribe( (enterprises: any) => {
          this.enterprises = enterprises
          this.enterprisesFiltered = this.enterprises.filter(item => item.enterpriseId === +this.id )
          console.log (this.enterprisesFiltered)
        })
    }
}
