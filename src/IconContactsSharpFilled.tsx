import React from 'react'
import { IconProps } from './types'

export const IconContactsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM80-160v-640h800v640H80Zm150-80h500q-45-56-109-88t-141-32q-77 0-141 32t-109 88Z" />
  </svg>
)
