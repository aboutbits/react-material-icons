import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconKeyboardFullSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-240h640v-320H160v320Z" />
  </svg>
)
