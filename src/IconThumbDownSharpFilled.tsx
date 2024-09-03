import React from 'react'
import { IconProps } from './types'

const IconThumbDownSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-176l146-344h454v520L360-40l-74-74 52-206H40Zm680 0v-520h160v520H720Z" />
  </svg>
)

export { IconThumbDownSharpFilled as default }
