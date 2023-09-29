import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import apresentacao from '../../assets/Apresentação.png'
import DisabledButton from '@/components/DisabledButton'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Login() {
  return (
    <section>
      <div>
        <Image src={apresentacao} alt="Imagem de login." />
      </div>
      <div>
        <label htmlFor="">E-mail:</label>
        <input type="text" placeholder="email@email.com" />
        <label htmlFor="">Senha:</label>
        <input type="text" placeholder="123456" />

        <span>Esqueceu a senha?</span>
        <DisabledButton>LOGIN</DisabledButton>

        <span>
          Você não tem uma conta? <span>Clique aqui</span>
        </span>
      </div>
    </section>
  )
}
