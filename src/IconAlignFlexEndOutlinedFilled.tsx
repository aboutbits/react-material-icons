import React from 'react'
import { IconProps } from './types.js'

export const IconAlignFlexEndOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h800v80H80Zm340-160v-560h120v560H420Z" />
  </svg>
)
