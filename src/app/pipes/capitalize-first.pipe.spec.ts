import { CapitalizeFirstPipe } from './capitalize-first.pipe';

describe('CapitalizeFirstPipe', () => {
  let pipe: CapitalizeFirstPipe;

  beforeEach(() => {
    pipe = new CapitalizeFirstPipe();
  });

  it('transforms "example" to "Example"', () => {
    expect(pipe.transform('example')).toEqual('Example');
  });

  it('leaves empty string unchanged', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('transforms "hello world" to "Hello World"', () => {
    expect(pipe.transform('hello world')).toEqual('Hello World');
  });
});
