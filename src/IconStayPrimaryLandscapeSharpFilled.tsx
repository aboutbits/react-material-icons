import React from 'react'
import { IconProps } from './types.js'

export const IconStayPrimaryLandscapeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h880v560H40Zm200-80h480v-400H240v400Z" />
  </svg>
)
