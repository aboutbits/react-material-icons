import React from 'react'
import { IconProps } from './types'

export const IconLeftPanelOpenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M500-640v320l160-160-160-160ZM400-200h360v-560H400v560Zm-280 80v-720h720v720H120Z" />
  </svg>
)
