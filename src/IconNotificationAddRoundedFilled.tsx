import React from 'react'
import { IconProps } from './types'

const IconNotificationAddRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm240-480h-80q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h80v-80q0-17 11.5-28.5T760-760q17 0 28.5 11.5T800-720v80h80q17 0 28.5 11.5T920-600q0 17-11.5 28.5T880-560h-80v80q0 17-11.5 28.5T760-440q-17 0-28.5-11.5T720-480v-80ZM200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q4 1 7 2t7 2q14 5 17.5 20t-6.5 28q-22 29-33.5 65T520-600q0 82 48 144.5T691-370q13 4 21 13.5t8 22.5v54h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Z" />
  </svg>
)

export { IconNotificationAddRoundedFilled as default }
