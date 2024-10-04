import React from 'react'
import { IconProps } from './types.js'

export const IconLooks4SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm400-160h80v-400h-80v160h-80v-160h-80v240h160v160Z" />
  </svg>
)
