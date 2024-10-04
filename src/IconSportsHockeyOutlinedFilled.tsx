import React from 'react'
import { IconProps } from './types.js'

export const IconSportsHockeyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-120q0-17 11.5-28.5T120-320h40v160H80Zm120 0v-160h160l34-78 64 140-34 76q-5 11-15 16.5t-21 5.5H200Zm600 0v-160h40q17 0 28.5 11.5T880-280v120h-80Zm-40 0H572q-11 0-21-5.5T536-182L254-800h134l92 208 92-208h134L544-446l56 126h160v160Z" />
  </svg>
)