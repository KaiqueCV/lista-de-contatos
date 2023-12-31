import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerHero = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 28px;
    color: ${Colors.blue100};
  }
`

export const Title = styled.h2`
  font-size: 36px;
  color: ${Colors.blue100};
`

export const TextLink = styled(Link)`
  font-size: 24px;
  color: ${Colors.blue100};
  text-decoration: none;
`
