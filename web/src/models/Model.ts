import { AxiosPromise, AxiosResponse } from "axios";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId{
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Eventing,
    private sync: ApiSync<T>
    ){}

    // public field 선언
    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;

    set(update: T): void {
      this.attributes.set(update);
      this.events.trigger('change');
    }
  
    fetch(): void{
      const id = this.get('id');
      
      if(typeof id !== 'number'){
        throw new Error('Cannot fetch without an id');
      }
  
      this.sync.fetch(id).then((response: AxiosResponse):void => {
        this.set(response.data);
      });
    }
  
    save(): void{
      this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      })
    }
}