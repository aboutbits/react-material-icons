import React from 'react'
import { IconProps } from './types.js'

export const IconUnpublishedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-91-91q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-90-89q-48 32-103.5 49T480-80Zm198-526q-12-12-28.5-12T622-606l-76 77-238-238q-18-18-14.5-43.5T320-847q37-16 77-24.5t83-8.5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 43-8.5 83T847-320q-10 23-35.5 27T767-308L602-474l76-76q11-11 11-28t-11-28ZM282-438l114 114q12 12 28 12t28-12l36-36-56-56-8 8-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28Z" />
  </svg>
)
