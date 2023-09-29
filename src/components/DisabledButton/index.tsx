'use client'
import * as S from './style'

type Props = {
  children: string
  onClick?: () => void
}

export default function DisabledButton({ onClick, children }: Props) {
  return <S.ButtonContainer>{children}</S.ButtonContainer>
}
