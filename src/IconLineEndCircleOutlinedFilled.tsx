import React from 'react'
import { IconProps } from './types'

export const IconLineEndCircleOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-240q-90 0-156.5-57T403-440H80v-80h323q14-86 80.5-143T640-720q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
  </svg>
)
