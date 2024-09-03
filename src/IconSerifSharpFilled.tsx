import React from 'react'
import { IconProps } from './types'

const IconSerifSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M248-240h104v-13h-51l53-147h134l50 147h-48v13h222v-13h-31L509-720h-55L280-253h-32v13Zm112-175 64-178 59 178H360ZM80-80v-800h800v800H80Z" />
  </svg>
)

export { IconSerifSharpFilled as default }
