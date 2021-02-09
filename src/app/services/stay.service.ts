import { Injectable } from '@angular/core';
import { Stay } from '../classes/stay';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StayService {



  //_url='http://localhost:3000/';
  _url='https://qstay-backend.herokuapp.com/';

  addStay(stay: Stay) {
    return this._http.post<any>(this._url+'admin/stay/addStay',stay);
  }

  getStayList(){
    return this._http.get<any>(this._url+"admin/stay/getList"); 
  }

  getStay(id: string) {
    return this._http.get<any>(this._url+"admin/stay/getStay/"+id); 
  }

  updateStay(selectedStay: Stay, id: string) {
    return this._http.post<any>(this._url+"admin/stay/updateStay/"+id,selectedStay);
  }

  deleteStay(id: any) {
    return this._http.delete(this._url+"admin/stay/deleteStay/"+id);
  }

  getOrderList() {
      return this._http.get<any>(this._url+"admin/order/getList");
  }

  getStayCount() {
   return this._http.get<any>(this._url+"admin/stay/getCount"); 
  }

  getOrderCount() {
    return this._http.get<any>(this._url+"admin/order/getCount"); 
  }

  getRecentOrders() {
    return this._http.get<any>(this._url+"admin/order/getLatestList"); 
  }
 
  getInterstateCount() {
    return this._http.get<any>(this._url+"admin/order/getInterstateCount"); 
  }
  getInternationalCount() {
    return this._http.get<any>(this._url+"admin/stay/getInternationalCount"); 
  }


  constructor(private _http: HttpClient) { }
}

