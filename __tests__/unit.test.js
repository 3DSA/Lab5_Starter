// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('Validation functions', () => {
  test('isPhoneNumber', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(isPhoneNumber('1234567890')).toBe(false);
    expect(isPhoneNumber('123-45-7890')).toBe(false);
  });

  test('isEmail', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('testtest@example.com')).toBe(true);
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('testexample.com')).toBe(false);
  });

  test('isStrongPassword', () => {
    expect(isStrongPassword('Test111111234')).toBe(true);
    expect(isStrongPassword('Test111111234')).toBe(true);
    expect(isStrongPassword('test12$$34')).toBe(false);
    expect(isStrongPassword('Test@')).toBe(false);
  });

  test('isDate', () => {
    expect(isDate('01/01/2022')).toBe(true);
    expect(isDate('1/1/2022')).toBe(true);
    expect(isDate('01/01/22')).toBe(false);
    expect(isDate('1/1')).toBe(false);
  });

  test('isHexColor', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
    expect(isHexColor('#FFF')).toBe(true);
    expect(isHexColor('#FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF')).toBe(false);
    expect(isHexColor('#FFFFF')).toBe(false);
  });
});
