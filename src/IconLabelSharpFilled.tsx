import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconLabelSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h560l240 320-240 320H80Z" />
  </svg>
)
