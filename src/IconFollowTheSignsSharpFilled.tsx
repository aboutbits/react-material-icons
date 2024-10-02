import React from 'react'
import { IconProps } from './types'

export const IconFollowTheSignsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-740q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM120-40l110-564-70 30v134H80v-188l210-86q27-11 55-2.5t43 34.5l38 64q27 44 72.5 71T600-520v80q-66 0-122.5-28T382-544l-24 120 82 82v302h-80v-240l-86-80-70 320h-84Zm550 0v-560H520v-280h360v280H730v560h-60Zm51-601 99-99-99-99-43 43 26 26H580v60h124l-26 26 43 43Z" />
  </svg>
)
