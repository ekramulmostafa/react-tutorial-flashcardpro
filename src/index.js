import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Stack from './components/Stack'
import { createStore } from 'redux'
import rootReducer from './reducer'
import { setStack } from './action'

const store = createStore(rootReducer)
store.subscribe(() => console.log('store', store.getState()))

store.dispatch(setStack({id: 0, title: 'example', card: []}))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/stack' component={Stack} />
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'))