import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconArrowSelectorToolOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z" />
  </svg>
)
