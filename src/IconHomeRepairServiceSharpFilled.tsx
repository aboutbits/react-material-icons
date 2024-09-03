import React from 'react'
import { IconProps } from './types'

const IconHomeRepairServiceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-640h240v-80H360v80ZM80-160v-200h160v40h80v-40h320v40h80v-40h160v200H80Zm0-240v-240h200v-160h400v160h200v240H720v-80h-80v80H320v-80h-80v80H80Z" />
  </svg>
)

export { IconHomeRepairServiceSharpFilled as default }
