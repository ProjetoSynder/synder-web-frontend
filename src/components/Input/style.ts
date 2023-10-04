import { styled } from 'styled-components'
import { colors } from '../../styles/styles'

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 5px;
  }

  input {
    max-width: 285px;
    min-height: 26px;
    padding: 4px 136px 2px 11px;
  }

  img {
    position: absolute;
    left: 256px;
    top: 27px;
    cursor: pointer;
  }
`
