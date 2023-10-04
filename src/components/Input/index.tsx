import Image from 'next/image'
import { useState } from 'react'
import { InputDiv } from './style'
import viewShow from '../../assets/View_light.png'
import viewHide from '../../assets/View_hide_light.png'

type Props = {
  text: string
  id: string
  placeholder: string
  password: boolean
  type?: string
}

export default function Input({
  text,
  id,
  placeholder,
  password,
  type
}: Props) {
  const [changeIcon, setChangeIcon] = useState(false)

  const setIcon = () => {
    setChangeIcon(!changeIcon)
  }

  return (
    <InputDiv>
      <label htmlFor={id}>{text}</label>
      {changeIcon === true ? (
        <input type="text" id={id} placeholder={placeholder} />
      ) : (
        <input type={type} id={id} placeholder={placeholder} />
      )}
      {password === true && changeIcon === false && (
        <Image src={viewShow} alt="Icone password." onClick={setIcon} />
      )}
      {password === true && changeIcon === true && (
        <Image src={viewHide} alt="Icone password." onClick={setIcon} />
      )}
    </InputDiv>
  )
}
