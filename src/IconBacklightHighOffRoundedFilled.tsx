import React from 'react'
import { IconProps } from './types.js'

export const IconBacklightHighOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M606-240H340q-25 0-42.5-17.5T280-300q0-25 17.5-42.5T340-360h146L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L606-240ZM80-360q-17 0-28.5-11.5T40-400q0-17 11.5-28.5T80-440h80q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360H80Zm400-320q-17 0-28.5-11.5T440-720v-120q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v120q0 17-11.5 28.5T480-680Zm198 82q-11-11-11-28t11-28l57-57q11-11 27.5-11t28.5 11q12 12 12 28t-12 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440h80q17 0 28.5 11.5T920-400q0 17-11.5 28.5T880-360h-80Z" />
  </svg>
)
