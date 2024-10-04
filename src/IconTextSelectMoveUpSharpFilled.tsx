import React from 'react'
import { IconProps } from './types.js'

export const IconTextSelectMoveUpSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h720v80H120Zm320-160v-247l-64 63-56-56 160-160 160 160-56 56-64-63v247h-80ZM120-760v-80h720v80H120Z" />
  </svg>
)
