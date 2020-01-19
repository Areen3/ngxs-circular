import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext, Store, Selector } from '@ngxs/store';

import * as fromModel from '../model';
import { BaseState, initialBaseStateDataModel } from './base';
import { Observable } from 'rxjs';

const initialFirmDataModel: fromModel.IFirmModel = {
  ...initialBaseStateDataModel,
  actualCostFirm: 0
};

@State<fromModel.IFirmModel>({
  name: 'firm',
  defaults: initialFirmDataModel
})
@Injectable({
  providedIn: 'root'
})
export class FirmState extends BaseState<fromModel.IFirmModel> implements NgxsOnInit {
  constructor(protected store: Store) {
    super(store);
  }
  @Selector()
  static actualCostFirm$(state: fromModel.IFirmModel): number {
    return state.actualCostFirm;
  }
  static actualCostFirm2$(state: fromModel.IFirmModel): number {
    return state.actualCostFirm;
  }

  @Selector()
  static state$<T>(state: T): T {
    return state;
  }
  @Action(fromModel.CompanyMenagmentAction.UpdateFinance)
  updateFinance(ctx: StateContext<fromModel.IFirmModel>, action: fromModel.CompanyMenagmentAction.UpdateFinance): Observable<any> {
    const state = ctx.getState();
    ctx.patchState({ actualCostFirm: state.actualCostFirm + action.payload });
    return this.store.dispatch(new fromModel.CompanyMenagmentAction.Pause(0));
  }
  @Action(fromModel.CompanyMenagmentAction.Pause)
  Pause(ctx: StateContext<fromModel.IFirmModel>, action: fromModel.CompanyMenagmentAction.Pause): void {
    const state = ctx.getState();
    ctx.patchState({ actualCostFirm: action.payload });
  }

  ngxsOnInit(ctx?: StateContext<fromModel.IFirmModel>): void {}
}
