import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public users: BehaviorSubject<string[]> = new BehaviorSubject(['Guillaume']);

  addUser(user: string): void {
    this.users.next(this.users.getValue().concat([user]));
    console.log(this.users.getValue());
  }
}
