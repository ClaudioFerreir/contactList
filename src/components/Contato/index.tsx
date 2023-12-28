import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { remover } from '../../store/reducers/contatos'
import ContactClass from '../../models/contact'

import * as S from './styles'

type Props = ContactClass

const Contato = ({ email, fullName, phone, id, friend }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.ContactItem key={id}>
      <div>
        <p>
          <span>{friend ? <MdOutlineFavorite /> : <MdFavoriteBorder />}</span>
          {fullName}
        </p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <S.MenuContact>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))} />
            <S.BotaoMenu onClick={() => setEstaEditando(true)} />
          </>
        )}
      </S.MenuContact>
    </S.ContactItem>
  )
}

export default Contato
