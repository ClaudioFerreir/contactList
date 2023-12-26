import { useDispatch, useSelector } from 'react-redux'

import FormWrapper, { BFTag, FiltroWrapper } from './styles'

import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const FormularioPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <FiltroWrapper>
      <FormWrapper action="#">
        <input
          type="text"
          placeholder="Pesquise"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </FormWrapper>
      <BFTag>Amigos</BFTag>
    </FiltroWrapper>
  )
}

export default FormularioPesquisa
