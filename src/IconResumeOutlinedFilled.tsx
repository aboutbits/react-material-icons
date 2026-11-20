import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconResumeOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z" />
  </svg>
)
