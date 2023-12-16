import Cabecalho from './containers/Cabecalho'
import Formulario from './containers/Fomulario'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <Formulario />
      </Container>
    </>
  )
}

export default App
