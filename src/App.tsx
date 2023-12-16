import Cabecalho from './containers/Cabecalho'
import Formulario from './containers/Fomulario'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <Formulario />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
