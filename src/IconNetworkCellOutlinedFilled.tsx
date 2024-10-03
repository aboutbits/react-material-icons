import React from 'react'
import { IconProps } from './types.js'

export const IconNetworkCellOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v800H80Zm600-80h120v-526L680-566v406Z" />
  </svg>
)
