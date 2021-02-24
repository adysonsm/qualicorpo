import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl: string = "https://servicodados.ibge.gov.br/api/v1/localidades"
  api : string = "http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/"

  constructor(private https: HttpClient) {

  }

  public getUfs() {
    return this.https.get(this.apiUrl + "/estados?orderBy=nome");
  }

  public getMunicipios(idUfs: number) {
    return this.https.get(this.apiUrl + `/estados/${idUfs}/municipios`);
  }

  public getProfessionals(uf:string, city: string) {
    return this.https.get(this.api + `profissao/${uf}/${city}?api-key=ddd70c32-fc98-4618-b494-a9698f824353`);
  }

}
