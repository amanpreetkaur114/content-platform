import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStoreService } from './services/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router,
    public dataStore: DataStoreService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.dataStore.currentUser;
      if (currentUser) {
        return true;
      }
      if(!localStorage.getItem('token')){
        this.router.navigate(['/auth/login'],{queryParams: {redirect_url:state.url}})
      }
    return true;
  }
  
}
