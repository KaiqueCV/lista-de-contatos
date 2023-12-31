import styled from 'styled-components'
import { Colors, Gradients } from '../../styles/theme'

export const S = {
  Bar: styled.div`
    max-width: 100%;
    width: 600px;
    height: 60px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.6s ease;

    &:hover {
      box-shadow: 2px 2px 15px ${Colors.blue150};
    }
  `,
  BoxIcon: styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 2rem;
    text-align: center;
    color: ${Colors.white};
    background: linear-gradient(to right, ${Gradients.gradient1});
  `,
  BoxTitle: styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${Colors.white};
  `,
  Title: styled.h2`
    font-size: 1.5rem;
    letter-spacing: 0.5px;

    a {
      color: ${Colors.blue100};
    }
  `
}
