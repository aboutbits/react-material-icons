import React from 'react'
import { IconProps } from './types'

export const IconOutdoorGardenRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120h240v-600L200-840 80-720v600Zm280 0h240v-600L480-840 360-720v600Zm280 0h240v-600L760-840 640-720v600Z" />
  </svg>
)
