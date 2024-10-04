import React from 'react'
import { IconProps } from './types'

const IconToolsLadderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m188-120 200-720h80l-34 120h225l33-120h80L572-120h-80l34-120H301l-33 120h-80Zm191-400h224l33-120H412l-33 120Zm-55 200h224l33-120H357l-33 120Z" />
  </svg>
)

export { IconToolsLadderSharp as default }
