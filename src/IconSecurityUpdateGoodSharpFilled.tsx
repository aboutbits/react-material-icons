import React from 'react'
import { IconProps } from './types'

const IconSecurityUpdateGoodSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M442-360 330-472l56-56 56 56 142-142 56 56-198 198ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)

export { IconSecurityUpdateGoodSharpFilled as default }
