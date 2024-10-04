import React from 'react'
import { IconProps } from './types.js'

export const IconTextSelectMoveDownSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-760v-80h720v80H120Zm360 480L320-440l56-56 64 63v-247h80v247l64-63 56 56-160 160ZM120-120v-80h720v80H120Z" />
  </svg>
)
