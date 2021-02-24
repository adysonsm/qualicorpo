import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  ufs:any;
  cities:any;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.service.getUfs().subscribe(data => {
     this.ufs = data
    })

    this.service.getProfessionals("SP", "SÃO PAULO").subscribe(data => {
    console.log(data);
    })
  }

  selectedUfs(idUfs : number) {
    this.service.getMunicipios(idUfs).subscribe(data => {
      this.cities = data;
    })
  }

}
