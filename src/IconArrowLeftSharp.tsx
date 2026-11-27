import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconArrowLeftSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-280 360-480l200-200v400Z" />
  </svg>
)
