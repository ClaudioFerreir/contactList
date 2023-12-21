import { Provider } from 'react-redux'

import store from './store'
import Cabecalho from './containers/Cabecalho'
import Formulario from './containers/FomularioPesquisa'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <Formulario />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
