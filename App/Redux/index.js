import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'

import LoginRedux from './LoginRedux'
import RegisterRedux from './RegisterRedux'
import UserRedux from './UserRedux'

export const reducers = combineReducers({
    nav: require('./NavigationRedux').reducer,
    login: LoginRedux,
    register: RegisterRedux,
    user: UserRedux
})

export default () => {
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers,rootSaga)

    if(module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers
            store.replaceReducer(nextRootReducer)

            const newYieldedSagas = require('../Sagas').default
            sagasManager.cancel()
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}