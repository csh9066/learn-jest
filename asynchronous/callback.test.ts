import { callBackFetchData } from './fetch';

// 매개변수가 없으면 콜백이 실행하기 전에 테스트가 끝남
// 테스트는 성공하지만 틀린 테스트임
describe('asynchronous callback', () => {
  test('the data is peanut butter', (done) => {
    function callback(data: any) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (e) {
        // 오류가 날 때도 done을 써줘야함
        // 안그러면 테스트가 안끝나 timeout 에러가 발생함
        done(e);
      }
    }
    callBackFetchData('peanut butter', callback);
  });
});
