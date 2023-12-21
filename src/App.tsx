import { Provider } from 'react-redux'

import store from './store'
import Cabecalho from './containers/Cabecalho'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import FormularioPesquisa from './containers/FomularioPesquisa'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <FormularioPesquisa />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
