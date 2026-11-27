import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconSlidersSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-360v-240h800v240H80Zm480-80h240v-80H560v80Z" />
  </svg>
)
