import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {NavigationActionTypes} from './navigation.actions';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Location} from '@angular/common';




@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private router: Router, private location: Location) {
  }

  @Effect({dispatch: false})
  routing = this.actions$.pipe(
    ofType(NavigationActionTypes.GoTo),
    tap(action => this.router.navigateByUrl(action.payload))
  );

  @Effect({dispatch: false})
  goBack = this.actions$.pipe(
    ofType(NavigationActionTypes.Back),
    tap( () => this.location.back())
  );

}
