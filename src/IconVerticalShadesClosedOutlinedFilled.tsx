import React from 'react'
import { IconProps } from './types'

const IconVerticalShadesClosedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z" />
  </svg>
)

export { IconVerticalShadesClosedOutlinedFilled as default }
