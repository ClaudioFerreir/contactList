import { useState } from 'react'

import { FiMoreVertical, FiTrash2 } from 'react-icons/fi'
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
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <FiTrash2 />
            <FiMoreVertical onClick={() => setEstaEditando(true)} />
          </>
        )}
      </S.MenuContact>
    </S.ContactItem>
  )
}

export default Contato
