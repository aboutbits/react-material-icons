import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconTimer5ShutterSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h240v-100H320v-340h360v120H440v100h240v340H320Z" />
  </svg>
)
