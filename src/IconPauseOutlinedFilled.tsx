import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconPauseOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
  </svg>
)
