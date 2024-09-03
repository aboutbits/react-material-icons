import React from 'react'
import { IconProps } from './types'

const IconBusinessCenterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-240h280v80h240v-80h280v240H80Zm360-240v-80h80v80h-80ZM80-440v-280h240v-160h320v160h240v280H600v-80H360v80H80Zm320-280h160v-80H400v80Z" />
  </svg>
)

export { IconBusinessCenterSharpFilled as default }
