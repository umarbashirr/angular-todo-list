import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}
  public saveData(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  public getData(key: string) {
    return localStorage.getItem(key);
  }
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
