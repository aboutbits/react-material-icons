import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconChevronBackwardOutlined: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
  </svg>
)
