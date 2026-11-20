import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconVideoStableSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm599-80 92-346-488-134-92 346 488 134Z" />
  </svg>
)
