import React from 'react'
import { IconProps } from './types.js'

export const IconInvertColorsOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M771-302 480-593v-175l-89 87-56-56 145-143 226 223q48 48 71 103.5T800-436q0 38-8 72.5T771-302Zm21 246L668-180q-42 31-91.5 45.5T480-120q-133 0-226.5-91.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56ZM480-200v-167L280-567q-21 32-30.5 64.5T240-436q0 100 70 168t170 68Z" />
  </svg>
)
