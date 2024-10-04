import React from 'react'
import { IconProps } from './types'

const IconPagesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm243-190 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
  </svg>
)

export { IconPagesSharpFilled as default }
