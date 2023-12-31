import { RiAddLine } from 'react-icons/ri'
import Hero from '../../components/Hero'
import * as S from './styles'

const AddContacts = () => {
  return (
    <S.ContainerAddContact>
      <Hero
        title="Adicionar contatos"
        Icon={RiAddLine}
        returnLink="Home"
        to="/"
      />
    </S.ContainerAddContact>
  )
}

export default AddContacts
