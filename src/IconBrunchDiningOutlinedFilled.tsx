import React from 'react'
import { IconProps } from './types.js'

export const IconBrunchDiningOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M100-80q-9 0-14.5-5.5T80-100v-60h560v60q0 9-5.5 14.5T620-80H100ZM80-240v-60q0-9 5.5-14.5T100-320h180v-80h160v80h180q9 0 14.5 5.5T640-300v60H80ZM720-80v-244q-36-41-58-81t-22-97v-378h240v378q0 57-21.5 97.5T800-324v164h80v80H720Zm0-560h80v-160h-80v160Z" />
  </svg>
)
