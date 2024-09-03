import React from 'react'
import { IconProps } from './types'

const IconAddColumnLeftSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-200v-560H560v560h240Zm-640 80v-160h80v80h240v-560H240v80h-80v-160h720v720H160Zm320-360Zm80 0h-80 80Zm0 0ZM160-360v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddColumnLeftSharp as default }
