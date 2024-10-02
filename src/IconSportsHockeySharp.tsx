import React from 'react'
import { IconProps } from './types'

export const IconSportsHockeySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-160h80v160H80Zm120 0v-160h160l34-78 64 140-44 98H200Zm600 0v-160h80v160h-80Zm-40 0H546L254-800h134l92 208 92-208h134L544-446l56 126h160v160Z" />
  </svg>
)
