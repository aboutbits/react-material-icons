import React from 'react'
import { IconProps } from './types'

export const IconCallMissedOutgoingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-263 120-623l56-57 304 304 224-224H520v-80h320v320h-80v-183L480-263Z" />
  </svg>
)
