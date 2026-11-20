import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconScrollableHeaderSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-200H200v200Z" />
  </svg>
)
