import React from 'react'
import { IconProps } from './types'

const IconStreamAppsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-280v-360h360v280H640l-80 80ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Z" />
  </svg>
)

export { IconStreamAppsSharpFilled as default }
