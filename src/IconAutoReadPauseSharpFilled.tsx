import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconAutoReadPauseSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-80v-800h800v640H240L80-80Z" />
  </svg>
)
