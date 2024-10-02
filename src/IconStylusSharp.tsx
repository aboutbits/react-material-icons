import React from 'react'
import { IconProps } from './types'

export const IconStylusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m358-160-250 52 52-250 198 198Zm0 0L160-358l515-515 198 198-515 515Zm-12-101 414-414-85-85-414 414 85 85Z" />
  </svg>
)
