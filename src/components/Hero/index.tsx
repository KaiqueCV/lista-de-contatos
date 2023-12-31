import { IconType } from 'react-icons'
import * as S from './styles'

type HeroProps = {
  title: string
  returnLink?: string
  to?: string
  Icon: IconType
}

const Hero = ({ title, returnLink, to, Icon }: HeroProps) => (
  <S.ContainerHero>
    <S.ContainerTitle>
      <Icon />
      <S.Title>{title}</S.Title>
    </S.ContainerTitle>
    <S.TextLink to={to as string}>{returnLink}</S.TextLink>
  </S.ContainerHero>
)

export default Hero
