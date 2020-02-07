
import {takeEvery,put,delay } from 'redux-saga/effects';
import {  } from 'redux-saga';

function* ageUpAsync() {
    yield delay(1000)
    yield put({type:'AGE_UP_ASYNC'})
}

export function* watchAgeUp(){
    yield takeEvery('AGE_UP',ageUpAsync)
}  