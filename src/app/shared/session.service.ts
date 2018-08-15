import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // public data:any=[]

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  setSessionUser(userData: any) {
    // this.loggedInUserDate = userData;
  }

  saveInLocal(key, val): void {
    // console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    // this.data[key]= this.storage.get(key);
   }

   getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
    // console.log(this.data);
   }
}
