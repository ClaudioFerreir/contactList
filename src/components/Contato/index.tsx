import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import ContactClass from '../../models/contact'

import * as S from './styles'

type Props = ContactClass

const Contato = ({
  email: emailOriginal,
  fullName: fullNameOriginal,
  phone: phoneOriginal,
  id,
  friend
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)

  useEffect(() => {
    if (fullNameOriginal.length > 0) {
      setFullName(fullNameOriginal)
    }
    setEmail(emailOriginal)
    setPhone(phoneOriginal)
  }, [fullNameOriginal, emailOriginal, phoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setFullName(fullNameOriginal)
    setPhone(phoneOriginal)
  }

  return (
    <S.ContactItem key={id}>
      <div>
        <p>
          <span>{friend ? <S.Favorito /> : ''}</span>
          <textarea
            disabled={!estaEditando}
            value={fullName}
            onChange={(evento) => setFullName(evento.target.value)}
          ></textarea>
        </p>
        <textarea
          disabled={!estaEditando}
          value={phone}
          onChange={(evento) => setPhone(parseInt(evento.target.value))}
        ></textarea>
        <textarea
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        ></textarea>
      </div>
      <div>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    fullName,
                    email,
                    phone
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))} />
            <S.BotaoMenu onClick={() => setEstaEditando(true)} />
          </>
        )}
      </div>
    </S.ContactItem>
  )
}

export default Contato
