import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Data {
  constructor(
    public http: Http
  ) { }

  getData() {
    // return this.http.get('http://2016.phillyemergingtech.com/api/ete/get_app_json/')
    return this.http.get('data/data.json')
      .map(dataRes => dataRes.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw(error.json().error || 'Server error');
  }
};
