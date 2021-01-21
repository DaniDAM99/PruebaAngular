import { NumerosPipe } from './numeros.pipe';

describe('NumerosPipe', () => {
  it('create an instance', () => {
    const pipe = new NumerosPipe();
    expect(pipe).toBeTruthy();
  });
});
