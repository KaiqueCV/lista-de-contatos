import { RiContactsFill } from 'react-icons/ri'

import Hero from '../../components/Hero'
import ContactBar from '../../components/ContactBar'

import * as S from './styles'

const MyContacts = () => {
  return (
    <S.ContainerMyContact>
      <Hero
        title="Meus contatos"
        Icon={RiContactsFill}
        returnLink="Home"
        to="/"
      />
      <div>
        <ContactBar
          name="Bruno Oliveira"
          email="bruno@email.com"
          telefone="(00) 99876-5432"
        />
      </div>
    </S.ContainerMyContact>
  )
}

export default MyContacts
