import Cabecalho from '../../containers/Cabecalho'
import FormularioPesquisa from '../../containers/FomularioPesquisa'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Cabecalho headerTitle="Meus Contatos" mainPage={true} />
    <FormularioPesquisa />
    <ListaDeContatos />
  </>
)

export default Home
