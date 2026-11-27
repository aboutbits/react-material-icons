import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconHangoutVideoSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h320v-128l160 128v-320L560-512v-128H240v320ZM80-160v-640h800v640H80Z" />
  </svg>
)
