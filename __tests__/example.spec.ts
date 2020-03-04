class Student {
  fullName: string;

  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }
}

const student = new Student('Jordan', 'Rodrigues');
const message = 'hello world';

test('sum two numbers', () => expect(1 + 1).toBe(2));
test('check message', () => expect(message).toEqual('hello world'));
test('check student', () =>
  expect(student.fullName).toEqual('Jordan Rodrigues'));
