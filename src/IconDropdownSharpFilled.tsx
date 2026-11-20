import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconDropdownSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-440h280v-280H440v280ZM120-120v-720h720v720H120Z" />
  </svg>
)
