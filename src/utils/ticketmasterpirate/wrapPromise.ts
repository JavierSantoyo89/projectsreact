//*********************/ wrapPromise *********************/
//*********************/  Necessary for Suspence  *********************/

type PendingPromise<T> = Promise<T> & { readonly status: 'pending' };
// type SuccessPromise<T> = Promise<T> & { readonly status: 'success'; readonly result: T };
type ErrorPromise = Promise<unknown> & { readonly status: 'error'; readonly result: unknown };

// type CustomPromise<T> = PendingPromise<T> | SuccessPromise<T> | ErrorPromise;


const wrapPromise = <T>(promise: Promise<T>): { read: () => void} => {
	let status: 'pending' | 'success' | 'error' = 'pending';
	let result: T | unknown;
  
	const suspender = promise
	  .then((r: T) => {
		status = 'success';
		result = r;
	  })
	  .catch((e: unknown) => {
		status = 'error';
		result = e;
	  });
  
	return {
	  read() {
		if (status === 'pending') {
		  throw suspender as PendingPromise<T>; // Aquí lanzamos directamente la promesa
		} else if (status === 'error') {
		  throw { ...suspender, status: 'error' } as ErrorPromise;
		} else if (status === 'success') {
		  return result as T;
		}
	  },
	};
  };
		

export default wrapPromise
