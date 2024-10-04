import React from 'react'
import { IconProps } from './types'

const IconVerticalDistributeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h800v80H80Zm200-340v-120h400v120H280ZM80-800v-80h800v80H80Z" />
  </svg>
)

export { IconVerticalDistributeSharp as default }
