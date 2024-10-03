import React from 'react'
import { IconProps } from './types.js'

export const IconBreakfastDiningSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-422q-37-22-58.5-58.5T80-680q0-66 47-113t113-47h480q66 0 113 47t47 113q0 43-21.5 79.5T800-542v422H160Zm320-144 176-176-176-176-176 176 176 176Zm0-112-64-64 64-64 64 64-64 64Z" />
  </svg>
)
