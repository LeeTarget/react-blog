import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.querySelector('#root')
);