import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { baseURL } from '../../shared/baseurl';
import { Promotion } from '../../shared/promotion';

/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: Http, private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Promotion Provider');
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions')
      .map(res => { return this.processHttpmsgService.extractData(res) })
      .catch(error => { return this.processHttpmsgService.handleError(error) });
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions/' + id)
      .map(res => { return this.processHttpmsgService.extractData(res) })
      .catch(error => { return this.processHttpmsgService.handleError(error) });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?featured=true')
      .map(res => { return this.processHttpmsgService.extractData(res)[0] })
      .catch(error => { return this.processHttpmsgService.handleError(error) });
  }

}
