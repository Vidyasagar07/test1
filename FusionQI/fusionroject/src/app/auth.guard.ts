import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(window.localStorage.getItem('token')){

    return true
  }else{
    return false
  }
  // return false;
};
