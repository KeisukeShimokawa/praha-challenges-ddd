import { Equality } from 'src/shared/utils/Euqality';

const arrayA = [1, 2, 3];
const objectA = { name: 'shimokawa', skill: 3 };
const objectB = { language: 'typescript' };

// https://github.com/moroshko/shallow-equal/blob/master/src/arrays.test.js
const testCases = [
  {
    should: '結果: true,  条件: [a = 1] and [b = 1]',
    a: 1,
    b: 1,
    result: true,
  },
  {
    should: '結果: false, 条件: [a = 1] and [b = 5]',
    a: 1,
    b: 5,
    result: false,
  },
  {
    should: '結果: false, 条件: [a] が falsy',
    a: null,
    b: {},
    result: false,
  },
  {
    should: '結果: false, 条件: [b] が falsy',
    a: {},
    b: null,
    result: false,
  },
  {
    should: '結果: true,  条件: [a] と [b] が同じオブジェクト',
    a: objectA,
    b: objectA,
    result: true,
  },
  {
    should: '結果: true,  条件: [a] と [b] が空オブジェクト',
    a: {},
    b: {},
    result: true,
  },
  {
    should: '結果: false, 条件: オブジェクトが同じキーと異なる値を有する',
    a: { game: 'chess' },
    b: { game: 'igo' },
    result: false,
  },
  {
    should: '結果: false, 条件: オブジェクトの有するキーが異なる',
    a: { game: 'chess', year: 2021, country: 'japan' },
    b: { game: 'chess', year: 2021 },
    result: false,
  },
  {
    should: '結果: true,  条件: オブジェクトが同じキーと値を有する',
    a: { first: objectA, second: objectB },
    b: { first: objectA, second: { language: 'typescript' } },
    result: true,
  },
  {
    should:
      '結果: true,  条件: オブジェクトが同じ要素を異なる順番で保持している',
    a: { first: objectA, second: objectB },
    b: { second: objectB, first: objectA },
    result: true,
  },
  {
    should: '結果: true,  条件: 空配列',
    a: [],
    b: [],
    result: true,
  },
  {
    should: '結果: true,  条件: 同じ配列への参照を指す',
    a: arrayA,
    b: arrayA,
    result: true,
  },
  {
    should: '結果: true,  条件: 同じ配列要素を有する',
    a: arrayA,
    b: [1, 2, 3],
    result: true,
  },
  {
    should: '結果: false, 条件: 配列要素が異なる',
    a: [1, 2],
    b: [1, 2, 3],
    result: false,
  },
  {
    should: '結果: true,  条件: 配列要素がオブジェクトを含む',
    a: [objectA, objectB],
    b: [objectA, { language: 'typescript' }],
    result: true,
  },
];

describe('Equality.isEqual', () => {
  testCases.forEach((testCase) => {
    it(`${testCase.should}`, () => {
      expect(Equality.isEqual(testCase.a, testCase.b)).toBe(testCase.result);
    });
  });
});
