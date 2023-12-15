import Cabecalho from './containers/Cabecalho'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
      </Container>
    </>
  )
}

export default App
