import React from 'react'
import { IconProps } from './types'

const IconTornadoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-840h880L480-80 40-840Zm139 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z" />
  </svg>
)

export { IconTornadoSharp as default }
