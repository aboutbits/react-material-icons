import React from 'react'
import { IconProps } from './types.js'

export const IconShoppingCartOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m633-440-80-80h69l110-200H353l-80-80h595L669-440h-36ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H177l99-202-72-162L28-820l56-56L876-84l-56 56ZM486-360l-80-80h-62l-40 80h182Zm136-160h-69 69Zm58 440q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80Z" />
  </svg>
)
