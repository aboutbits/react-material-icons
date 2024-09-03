import React from 'react'
import { IconProps } from './types'

const IconAddToHomeScreenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40v-240h80v40h400v-480H320v40h-80v-240h560v880H240Zm-64-240-56-56 224-224H200v-80h280v280h-80v-144L176-280Z" />
  </svg>
)

export { IconAddToHomeScreenSharpFilled as default }
