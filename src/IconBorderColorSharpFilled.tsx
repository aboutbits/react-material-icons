import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconBorderColorSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80 0v-160h800V0H80Zm80-240v-170l505-504 168 171-503 503H160Zm504-448 56-56-56-56-56 56 56 56Z" />
  </svg>
)
