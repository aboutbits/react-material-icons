import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m831-16-64-64H80l344-344L96-751l56-57L888-72l-57 56Zm49-176L536-536l344-344v688Z" />
  </svg>
)
