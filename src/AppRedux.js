import AppRouter from './components/AppRoutes'
import { Provider } from 'react-redux'
import store from './redux/store'

// Debemos crear el provider para envolver a toda nuestra aplicacion para
// para que sea un proveedor del estado global, osea del Store.
function AppRedux() {
  return (
    <Provider store={store} >
      <AppRouter />
    </Provider>
  )
}

export default AppRedux