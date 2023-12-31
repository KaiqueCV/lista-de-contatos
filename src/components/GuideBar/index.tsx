import { IconType } from 'react-icons'
import * as S from './styles'

type PropsType = {
  title: string
  route: string
  Icon: IconType
}

const GuideBar = ({ title, route, Icon }: PropsType) => {
  return (
    <S.Bar>
      <S.BoxIcon>
        <Icon />
      </S.BoxIcon>
      <S.Title to={route}>{title}</S.Title>
    </S.Bar>
  )
}

export default GuideBar
