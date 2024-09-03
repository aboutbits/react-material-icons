import React from 'react'
import { IconProps } from './types'

const IconShoppingBagSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-640h160q0-66 47-113t113-47q66 0 113 47t47 113h160v640H160Zm80-80h480v-480h-80v120h-80v-120H400v120h-80v-120h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
  </svg>
)

export { IconShoppingBagSharp as default }
