import React from 'react'
import { IconProps } from './types'

const IconTornadoRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M179-840h602q47 0 69.5 40t-.5 80L549-200q-23 40-69 40t-69-40L110-720q-23-40-.5-80t69.5-40Zm0 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z" />
  </svg>
)

export { IconTornadoRounded as default }
