import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconCrop32SharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-240v-480h720v480H120Z" />
  </svg>
)
