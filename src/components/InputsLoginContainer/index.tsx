'use client'
import Input from '../Input'
import { InputsLoginContainerDiv } from './style'

export default function InputsLoginContainer() {
  return (
    <InputsLoginContainerDiv>
      <Input
        text="E-mail:"
        id="email"
        placeholder="email@email.com"
        password={false}
        type="text"
      />
      <Input
        text="Senha"
        id="senha"
        placeholder="123456"
        password={true}
        type="password"
      />
    </InputsLoginContainerDiv>
  )
}
