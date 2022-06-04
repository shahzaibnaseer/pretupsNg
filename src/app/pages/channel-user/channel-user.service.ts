import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelUserService {
  constructor(private http: HttpClient) {}
  get_channel_users(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/channel-user`);
  }

  get_channel_user(id: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}/channel-user/${id}`);
  }

  update_channel_user(id: any, body: any): Observable<any> {
    return this.http.put(`${environment.baseUrl}/channel-user/${id}`, body);
  }
  download_csv(): any {
    return this.http.get(`${environment.baseUrl}/channel-user/download/csv`, {
      observe: 'response',
      responseType: 'blob',
    });
  }

  filter_channel_user(body: any): any {
    return this.http.post(`${environment.baseUrl}/channel-user/filter`, body);
  }
}
