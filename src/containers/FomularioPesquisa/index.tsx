import { FaSearch } from 'react-icons/fa'
import FormWrapper from './styles'

const FormularioPesquisa = () => {
  return (
    <>
      <FormWrapper action="#">
        <input type="text" placeholder="Pesquise" />
        <button type="submit">
          <FaSearch />
        </button>
      </FormWrapper>
    </>
  )
}

export default FormularioPesquisa
