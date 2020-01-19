import { BaseActionWithPayload } from './base';

export namespace CompanyMenagmentAction {
  enum Types {
    updateFinance = 'cmd [CompanyMenagment] Update finance',
    pause = 'cmd [CompanyMenagment] pause'
  }

  export class UpdateFinance<T extends number = number> extends BaseActionWithPayload<T> {
    static type: Types = Types.updateFinance;
    public constructor(data: T) {
      super(data);
    }
  }
  export class Pause<T extends number = number> extends BaseActionWithPayload<T> {
    static type: Types = Types.pause;
    public constructor(data: T) {
      super(data);
    }
  }
}
