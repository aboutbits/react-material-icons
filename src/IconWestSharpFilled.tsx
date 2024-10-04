import React from 'react'
import { IconProps } from './types'

const IconWestSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
  </svg>
)

export { IconWestSharpFilled as default }
