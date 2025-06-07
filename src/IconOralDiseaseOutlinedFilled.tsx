import React from 'react'
import { IconProps } from './types.js'

export const IconOralDiseaseOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-360h80v-184L144-760l160-160 56 56-104 104 104 104v216h80v360H200Zm320 0v-360h80v-125q-52-14-86-56t-34-99q0-66 47-113t113-47q66 0 113 47t47 113q0 57-34 99t-86 56v125h80v360H520Zm120-560q33 0 56.5-23.5T720-720q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720q0 33 23.5 56.5T640-640Z" />
  </svg>
)
