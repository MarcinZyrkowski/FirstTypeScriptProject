type User = {
  name: string,
  age: number,
  roles: string[],
  createdAt: Date,
  isDeleated: boolean,
}
type Params = {
  id?: string;
}
type HTTPRequest = {
  method: HTTPMethod,
  host: string,
  path: string,
  body?: User,
  params: Params
}
type HTTPResponse = {
  status: HTTPStatus
}
type RequestProcess = (request: HTTPRequest) => HTTPResponse;
type ErrorType = {
  status: number;
  message: string;
}
type ErrorProcess = (error: ErrorType) => HTTPResponse;
type CompleteProcess = () => void;
type Handlers = {
    next: RequestProcess,
    error: ErrorProcess,
    complete: CompleteProcess
}
type observableArgument = (obs: Observer) =>  (() => void)
type handleRequest = (request: HTTPRequest) => HTTPResponse;
type handleError = (error: ErrorType) => HTTPResponse;
type handleComplete = () => void;
enum HTTPMethod { HTTP_POST_METHOD, HTTP_GET_METHOD }
enum HTTPStatus { HTTP_STATUS_OK = 200, HTTP_STATUS_INTERNAL_SERVER_ERROR = 500 }

class Observer {
    private isUnsubscribed: boolean;
    private handlers: Handlers;
    public _unsubscribe?: () => void;

    constructor(handlers: Handlers) {
      this.handlers = handlers;
      this.isUnsubscribed = false;
    }
  
    next(value: HTTPRequest) {
      if (this.handlers.next && !this.isUnsubscribed) {
        this.handlers.next(value);
      }
    }
  
    error(error: ErrorType) {
      if (!this.isUnsubscribed) {
        if (this.handlers.error) {
          this.handlers.error(error);
        }
  
        this.unsubscribe();
      }
    }
  
    complete() {
      if (!this.isUnsubscribed) {
        if (this.handlers.complete) {
          this.handlers.complete();
        }
  
        this.unsubscribe();
      }
    }
  
    unsubscribe() {
      this.isUnsubscribed = true;
  
      if (this._unsubscribe) {
        this._unsubscribe();
      }
    }
  }
  
  class Observable {
    private _subscribe: observableArgument;

    constructor(subscribe: observableArgument) {
      this._subscribe = subscribe;
    }
  
    static from(values: HTTPRequest[]) {
      return new Observable((observer: Observer) => {
        values.forEach((value) => observer.next(value));
  
        observer.complete();
  
        return () => {
          console.log('unsubscribed');
        };
      });
    }
  
    subscribe(obs: Handlers) {
      const observer = new Observer(obs);
  
      observer._unsubscribe = this._subscribe(observer);
  
      return ({
        unsubscribe() {
          observer.unsubscribe();
        }
      });
    }
  }
  
  const HTTP_POST_METHOD = 'POST';
  const HTTP_GET_METHOD = 'GET';
  
  const HTTP_STATUS_OK = 200;
  const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
  
  const userMock: User = {
    name: 'User Name',
    age: 26,
    roles: [
      'user',
      'admin'
    ],
    createdAt: new Date(),
    isDeleated: false,
  };
  
  const requestsMock: HTTPRequest[] = [
    {
      method: HTTPMethod.HTTP_POST_METHOD,
      host: 'service.example',
      path: 'user',
      body: userMock,
      params: {},
    },
    {
      method: HTTPMethod.HTTP_GET_METHOD,
      host: 'service.example',
      path: 'user',
      params: {
        id: '3f5h67s4s'
      },
    }
  ];
  
  const handleRequest: handleRequest = (request: HTTPRequest) => {
    // handling of request
    return {status: HTTPStatus.HTTP_STATUS_OK};
  };
  const handleError: handleError = (error: ErrorType) => {
    // handling of error
    return {status: HTTPStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR};
  };
  
  const handleComplete: handleComplete = () => console.log('complete');
  
  const requests$: Observable = Observable.from(requestsMock);
  
  const subscription = requests$.subscribe({
    next: handleRequest,
    error: handleError,
    complete: handleComplete
  });
  
  subscription.unsubscribe();