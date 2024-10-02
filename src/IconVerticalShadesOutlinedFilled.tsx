import React from 'react'
import { IconProps } from './types'

export const IconVerticalShadesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm320-80h160v-560H400v560Z" />
  </svg>
)
