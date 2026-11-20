import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconKeyboardControlKeySharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z" />
  </svg>
)
