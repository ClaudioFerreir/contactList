import { useDispatch, useSelector } from 'react-redux'

import { FaSearch } from 'react-icons/fa'
import FormWrapper from './styles'

import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const FormularioPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <FormWrapper action="#">
        <input
          type="text"
          placeholder="Pesquise"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </FormWrapper>
    </>
  )
}

export default FormularioPesquisa
