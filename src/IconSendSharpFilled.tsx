import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconSendSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
  </svg>
)
