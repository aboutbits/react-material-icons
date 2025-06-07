import React from 'react'
import { IconProps } from './types.js'

export const IconBottomPanelCloseSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-500 160-160H320l160 160ZM200-400h560v-360H200v360Zm-80 280v-720h720v720H120Z" />
  </svg>
)
