import { isObjectsEquals } from './solution/index.js';

describe('objects/isObjectsEquals', () => {
  it('should be defined', () => {
    expect(isObjectsEquals).toBeDefined();
  });

  it('should return true when objects are equals', () => {
    const obj1 = {
      title: 'some title',
      user: {
        name: 'Scamito',
        age: 21,
        mother: {
          name: 'Alexandra',
          age: 62
        }
      }
    };
    const obj2 = { ...obj1 };

    expect(isObjectsEquals(obj1, obj2)).toBe(true);
  });

  it('should return false when objects are not equals', () => {
    const obj1 = {
      title: 'some title',
      user: {
        name: 'Scamito',
        age: 21,
        mother: {
          name: 'Alexandra',
          age: 62
        }
      }
    };
    const obj2 = {
      user: {
        name: 'Derek',
        age: 29
      }
    };

    expect(isObjectsEquals(obj1, obj2)).toBe(false);
  });
});