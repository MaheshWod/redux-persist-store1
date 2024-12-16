import Login from './Login'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'



const persistor = persistStore(store)

const App = () => {
    
  return (
    <>
      <Provider store={store} >
        <PersistGate persistor={persistor}>
          <Login />
        </PersistGate>
      </Provider>
    </>)
}

export default App


// import React from 'react';
// import Login from './Login';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import persistStore from 'redux-persist/lib/persistStore';

// const persistor = persistStore(store);

// const App = () => {
//     return (
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <Login />
//             </PersistGate>
//         </Provider>
//     );
// };

// export default App