import React from 'react'
import { IconProps } from './types'

const IconVerticalSplitSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-80h320v80H120Zm0 160v-80h320v80H120Zm0-320v-80h320v80H120Zm0-160v-80h320v80H120Zm400 480v-560h320v560H520Z" />
  </svg>
)

export { IconVerticalSplitSharpFilled as default }
