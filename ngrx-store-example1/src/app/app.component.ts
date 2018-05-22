import { Component } from '@angular/core';
import { Store, select, createSelector, ActionsSubject } from '@ngrx/store';
import { Observable, pipe, Subscription } from 'rxjs';
import { State, DecrementAction, IncrementAction, payload1, getCounter1, getCounter2 } from './ngrx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  counter$: any;
  counter2$: Observable<number>;

  constructor(private store: Store<{main: State}>) {
    this.counter$  = this.store.pipe(select(getCounter1));
    this.counter2$ = this.store.pipe(select(getCounter2));
  }

  increment(prop: payload1) {
    this.store.dispatch(new IncrementAction(prop));
  }

  decrement(prop: payload1) {
    this.store.dispatch(new DecrementAction(prop));
  }
}
