import React from 'react'
import { IconProps } from './types'

const IconFilter5SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h240v-240H520v-80h160v-80H440v240h160v80H440v80ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z" />
  </svg>
)

export { IconFilter5SharpFilled as default }
