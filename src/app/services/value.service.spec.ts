import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    service = new ValueService();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable', (done) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
