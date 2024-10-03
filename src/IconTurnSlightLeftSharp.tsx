import React from 'react'
import { IconProps } from './types.js'

export const IconTurnSlightLeftSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-160v-304L320-664v90h-80v-226h226v80h-90l224 224v336h-80Z" />
  </svg>
)
