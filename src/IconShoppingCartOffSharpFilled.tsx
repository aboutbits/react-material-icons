import React from 'react'
import { IconProps } from './types.js'

export const IconShoppingCartOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M633-440 273-800h595L669-440h-36ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H177l99-202-72-162L28-820l56-56L876-84l-56 56ZM680-80q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80Z" />
  </svg>
)
