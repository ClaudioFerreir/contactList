import { FaSearch } from 'react-icons/fa'
import FormWrapper from './styles'

const Formulario = () => (
  <>
    <FormWrapper action="#">
      <input type="text" placeholder="Pesquise" />
      <button type="submit">
        <FaSearch />
      </button>
    </FormWrapper>
  </>
)

export default Formulario
