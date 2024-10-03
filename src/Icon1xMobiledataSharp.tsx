import React from 'react'
import { IconProps } from './types.js'

export const Icon1xMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-320h-80v-80h160v400h-80Zm174 0 126-212-114-188h94l66 110 68-110h92L634-492l126 212h-94l-80-134-80 134h-92Z" />
  </svg>
)
