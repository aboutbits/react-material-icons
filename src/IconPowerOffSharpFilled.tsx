import React from 'react'
import { IconProps } from './types.js'

export const IconPowerOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-120v-120L240-380v-297h43v112L56-792l56-56 736 736-56 56-198-198-14 14v120H380Zm306-268L320-754v-86h80v160h160v-160h80v160h80v258l-34 34Z" />
  </svg>
)
