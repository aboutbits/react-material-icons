import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconContentCopySharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240v-640h520v640H280ZM120-80v-640h80v560h440v80H120Z" />
  </svg>
)
