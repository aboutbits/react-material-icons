import React from 'react'
import { IconProps } from './types.js'

export const IconRightPanelCloseSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m300-320 160-160-160-160v320ZM200-200h360v-560H200v560Zm-80 80v-720h720v720H120Z" />
  </svg>
)
