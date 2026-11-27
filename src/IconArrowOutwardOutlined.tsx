import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconArrowOutwardOutlined: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
  </svg>
)
