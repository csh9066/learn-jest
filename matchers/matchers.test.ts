describe('common matchers test', () => {
  // 주소 값만 확인
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('object assignment ', () => {
    const data: any = { one: 1 };
    data['two'] = 2;

    // 재귀적으로 오브젝트의 값들이 맞는지 확인함
    expect(data).toEqual({ one: 1, two: 2 });
  });

  // 매처 함수 뒤에 not을 줘서 매처를 부정할 수 있음
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  // 그 외에 기본적인 매처들
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  // 숫자와 관련된 matchers
  test('two plus two', () => {
    const value = 2 + 2;
    // 걍 직역하면 됨 value는 3보다 크다
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  // float값 mactcher
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // 소수점 계산은 toBe나 toEqual r말고 toBeCloseTo 사용
    expect(value).toBeCloseTo(0.3);
  });

  // string
  test('there is no I in team', () => {
    // 정규식 사용은 toMatch
    expect('team').not.toMatch(/i/);
  });

  test('there in in  a stop in Christoph', () => {
    expect('Christoph').toMatch(/STOP/i);
  });

  // array and iterables
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });
});
