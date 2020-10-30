import { promiseFetchData } from './fetch';

describe('asynchronous promise', () => {
  test('the data is peanut butter', () => {
    // 프로미스를 리턴 해야함 리턴을 안하면 프로미스가 완료전 테스트가 끝남
    return promiseFetchData('peanut butter').then((data) => {
      expect(data).toBe('peanut butter');
    });
  });

  test('the fetch fails with an error', () => {
    // assertions는 매처가 몇개 실행됐는지 확인하는 함수임
    // 프로미스가 테스트가 잘 작동했는지 확인 하기 좋음
    expect.assertions(1);
    return promiseFetchData().catch((e) => expect(e).toBe('error'));
  });
});

describe('async await', () => {
  test('the data is peanut butter', async () => {
    // 프로미스를 리턴 해야함 리턴을 안하면 프로미스가 완료전 테스트가 끝남
    const data = await promiseFetchData('peanut butter');
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      const data = await promiseFetchData();
      // if (data === 'error') throw new Error('error');
    } catch (e) {
      expect(e).toBe('error');
    }
  });
});
