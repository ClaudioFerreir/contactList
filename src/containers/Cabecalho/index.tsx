import { FaArrowLeft, FaPlus } from 'react-icons/fa'

import HeaderWrapper from './styles'

const BarraSuperior = () => {
  return (
    <HeaderWrapper>
      <FaArrowLeft />
      <h1>Contact List</h1>
      <FaPlus />
    </HeaderWrapper>
  )
}

export default BarraSuperior
