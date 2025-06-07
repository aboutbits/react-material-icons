import React from 'react'
import { IconProps } from './types.js'

export const IconBackgroundGridSmallOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120h40v-120H120v40q0 33 23.5 56.5T200-120Zm120 0h120v-120H320v120Zm200 0h120v-120H520v120Zm200 0h40q33 0 56.5-23.5T840-200v-40H720v120ZM120-720h120v-120h-40q-33 0-56.5 23.5T120-760v40Zm0 200h120v-120H120v120Zm0 200h120v-120H120v120Zm200-400h120v-120H320v120Zm0 200h120v-120H320v120Zm0 200h120v-120H320v120Zm200-400h120v-120H520v120Zm0 200h120v-120H520v120Zm0 200h120v-120H520v120Zm200-400h120v-40q0-33-23.5-56.5T760-840h-40v120Zm0 200h120v-120H720v120Zm0 200h120v-120H720v120Z" />
  </svg>
)
