import React from 'react'
import { IconProps } from './types'

export const IconBottomPanelOpenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-500h320L480-660 320-500ZM200-400h560v-360H200v360Zm-80 280v-720h720v720H120Z" />
  </svg>
)
