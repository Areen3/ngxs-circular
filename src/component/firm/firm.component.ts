import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CompanyMenagmentAction } from 'src/model';

@Component({
  selector: 'app-firm',
  template: `
    <h3>firm</h3>
  `
})
export class FirmComponent implements OnInit {
  continent: any;
  constructor(public store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(new CompanyMenagmentAction.UpdateFinance(0));
  }
}
