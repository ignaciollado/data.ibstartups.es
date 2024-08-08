import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrl: './enterprise-detail.component.scss'
})
export class EnterpriseDetailComponent {
  public id:string | null = this.route.snapshot.paramMap.get('id')

  constructor(  private route: ActivatedRoute,
    private router: Router ) {  }
}
