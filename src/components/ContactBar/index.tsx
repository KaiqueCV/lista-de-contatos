import { MdOutlineStar, MdStarBorder } from 'react-icons/md'
import * as S from './styles'
import { useState } from 'react'
import Button from '../Button'

type ContactBarProps = {
  name: string
  email: string
  telefone: string
  image: string
  handleClick?: () => void
}

const ContactBar = ({
  name,
  email,
  telefone,
  image,
  handleClick
}: ContactBarProps) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <S.ContainerBar>
      <S.ContainerImage>
        <img src={image} alt="foto" />
      </S.ContainerImage>
      <S.ContainerInfo>
        <S.ContainerTitle>
          <S.Text>
            Nome: <span>{name}</span>
          </S.Text>
          {favorite ? (
            <MdOutlineStar onClick={() => setFavorite(!favorite)} />
          ) : (
            <MdStarBorder onClick={() => setFavorite(!favorite)} />
          )}
        </S.ContainerTitle>
        <div>
          <S.Text>
            Tel: <span>{telefone}</span>
          </S.Text>
          <S.Text>
            E-mail: <span>{email}</span>
          </S.Text>
        </div>

        <S.ContainerEdit>
          <Button title="Editar" kind="primary" onPress={handleClick} />
          <Button title="Remover" kind="danger" onPress={handleClick} />
        </S.ContainerEdit>
      </S.ContainerInfo>
    </S.ContainerBar>
  )
}

export default ContactBar
