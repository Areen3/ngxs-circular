// bazowa akcja dla wszystkich akcji typu NGXS
export abstract class BaseAction {}

// bazowa akcja z parametrami
export abstract class BaseActionWithPayload<T> extends BaseAction {
  payload: T;
  protected constructor(data: T) {
    super();
    this.payload = data;
  }
}
