import { Link } from 'react-router-dom'

import { FaArrowLeft, FaPlus } from 'react-icons/fa'

import HeaderWrapper from './styles'

const BarraSuperior = () => {
  return (
    <HeaderWrapper>
      <Link to={'/'}>
        <FaArrowLeft />
      </Link>
      <h1>Meus Contatos</h1>
      <Link to={'/novo'}>
        <FaPlus />
      </Link>
    </HeaderWrapper>
  )
}

export default BarraSuperior
