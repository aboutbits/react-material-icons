import React from 'react'
import { IconProps } from './types'

export const IconHorizontalSplitOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-240h720v240H120Zm0-320v-80h720v80H120Zm0-160v-80h720v80H120Z" />
  </svg>
)
