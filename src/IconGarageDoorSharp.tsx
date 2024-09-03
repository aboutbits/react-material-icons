import React from 'react'
import { IconProps } from './types'

const IconGarageDoorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-406L88-440l-48-64 440-336 440 336-48 64-112-86v406h-80v-400H280v400h-80Zm120-40v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm-23-200h366L480-739 297-600Z" />
  </svg>
)

export { IconGarageDoorSharp as default }