import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _districtsJsonURL = 'assets/districts.json';
  private _baseURL = 'api/';

  constructor(private http: HttpClient) {}

  public getAllDisticts(): Observable<any> {
    return this.http.get(this._districtsJsonURL);
  }

  /**
   * getVaccineAvailability
     districtId,availabilityDate   */
  public getVaccineAvailability(districtId, availabilityDate): Observable<any> {
    let finalUrl = `${environment.apiUrl}/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${availabilityDate}`;

    // if (environment.production) {
    //   finalUrl = `${environment.apiUrl}/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${availabilityDate}`;
    // }

    return this.http.get(finalUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US',
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }
}
