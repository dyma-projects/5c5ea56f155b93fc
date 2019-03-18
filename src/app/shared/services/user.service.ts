import { Injectable } from '@angular/core';
import { BehaviourSubject } from '@rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public users: BehaviourSubject<string>;
}
