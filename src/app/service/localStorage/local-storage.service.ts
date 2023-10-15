import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al almacenar en localStorage: ', error);
    }
  }

  getItem(key: string): any {
    try {
      const value = localStorage.getItem(key);
      if(value) {
        return JSON.parse(value);
      }
      return null;
    } catch (error:any) {
      console.error('Error al recuperar de localStorage: ', error);
      return null;
    }
  } 

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de localStorage:', error);
    }
  }

  includesItem(key: string, value: any) {
    const keys = localStorage.getItem(key);
    if(keys?.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
}
