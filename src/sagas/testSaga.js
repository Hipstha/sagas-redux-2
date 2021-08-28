import { delay, put, take, call, fork } from 'redux-saga/effects';

export function* testSaga() {
  while( true ) {
    console.log('STARTING SAGA');
    yield take('TEST_MESSAGE');
    const a = yield call( double, 2 );
    console.log(a);
    const b = yield double(3);
    console.log(b);
    console.log("Finish saga function");
  }
}

export function* testSaga2() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

export function* dispatchTest() {
  while ( true ) {
    yield delay(1000);
    yield put({type: 'TEST_MESSAGE_2', payload: 1000})
  }
};

function* doNothing() {
  console.log('I have been called');
  yield delay(1000);
  console.log('I am doing nothing');
}

export function* testSagaFork() {
  while(true) {
    yield take('TEST_MESSAGE_2');
    yield fork( doNothing );
    yield fork( doNothing );
    yield fork( doNothing );
  }
}

function double(number) {
  return number * 2;
}
