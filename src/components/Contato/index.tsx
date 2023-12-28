import { useState } from 'react'

import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'

import * as S from './styles'

type Props = {
  fullName: string
  email: string
  phone: number
  id: number
  friend: boolean
}

const Contato = ({ email, fullName, phone, id, friend }: Props) => {
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
            <S.BotaoExcluir />
            <S.BotaoMenu onClick={() => setEstaEditando(true)} />
          </>
        )}
      </S.MenuContact>
    </S.ContactItem>
  )
}

export default Contato
