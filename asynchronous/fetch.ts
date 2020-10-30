export function callBackFetchData(data: any, callback: Function) {
  setTimeout(() => {
    callback(data);
  }, 1000);
}

export function promiseFetchData(data?: any) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject('error');
    }
  });
}
