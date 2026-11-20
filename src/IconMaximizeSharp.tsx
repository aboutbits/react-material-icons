import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconMaximizeSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-760v-80h640v80H160Z" />
  </svg>
)
