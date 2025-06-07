import React from 'react'
import { IconProps } from './types.js'

export const IconFilterBAndWSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-120H120v-720h720v720Zm-640-80h280v-320l280 320v-560H480v240L200-200Z" />
  </svg>
)
