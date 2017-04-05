import Greeting from './Greeting'

describe('sayHello', () => {

  it('returns a cordial greeting', () => {
    const greeting = new Greeting();
    greeting.name = 'Colin';
    const result = greeting.sayHello();
    expect(result).toContain('Hello Colin');
  });

});
