import React from 'react'
import { IconProps } from './types'

const IconFileSaveOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m836-236-56-57 44-44 56 57-44 44Zm-76-77-80-80v-47h80v127Zm0-207H553L273-800l-81-80h328l240 240v120ZM480-367 767-80H560V0h320v-80L84-876l-56 56 132 133v527h320v-207Zm200-233L480-800l200 200-200-200v200h200Z" />
  </svg>
)

export { IconFileSaveOffSharpFilled as default }
