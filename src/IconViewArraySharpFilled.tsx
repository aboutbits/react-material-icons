import React from 'react'
import { IconProps } from './types.js'

export const IconViewArraySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-560h120v560H120Zm160 0v-560h400v560H280Zm440 0v-560h120v560H720Z" />
  </svg>
)
