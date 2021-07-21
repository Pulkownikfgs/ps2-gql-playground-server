import {assertHasNoErrors, assertHasData} from '../assert';

describe('census-api.utils.assert.assertHasNoErrors', () => {
  it('Should throw error if there is errorCode in data', () => {
    expect(() => assertHasNoErrors({errorCode: 'error'})).toThrow();
    expect(() => assertHasNoErrors({field: 'test'})).not.toThrow();
  });
});

describe('census-api.utils.assert.assertHasData', () => {
  it('Should throw error if there is no field in data', () => {
    expect(() => assertHasData({}, 'field')).toThrow();
    expect(() => assertHasData({field: 'test'}, 'field')).not.toThrow();
  });
});
