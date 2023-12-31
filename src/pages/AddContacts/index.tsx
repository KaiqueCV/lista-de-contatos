import { RiAddLine } from 'react-icons/ri'
import { IoHome } from 'react-icons/io5'

import Hero from '../../components/Hero'

import * as S from './styles'

const AddContacts = () => {
  return (
    <S.ContainerAddContact>
      <Hero
        title="Adicionar contatos"
        Icon={RiAddLine}
        IconLink={IoHome}
        titleIcon="Home"
        to="/"
      />
    </S.ContainerAddContact>
  )
}

export default AddContacts
