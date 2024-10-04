import React from 'react'
import { IconProps } from './types'

const IconShoppingBagSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-640h160q0-66 47-113t113-47q66 0 113 47t47 113h160v640H160Zm240-640h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Zm-80 200h80v-120h-80v120Zm240 0h80v-120h-80v120Z" />
  </svg>
)

export { IconShoppingBagSharpFilled as default }
