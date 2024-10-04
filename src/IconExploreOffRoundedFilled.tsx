import React from 'react'
import { IconProps } from './types'

const IconExploreOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-63-62q-49 32-104.5 49T480-80Zm2-284L362-484l-93 195q-5 10 2.5 17.5T289-269l193-95Zm-2-516q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 42-8.5 82.5T846-319q-6 14-17.5 20.5T803-292q-10 0-19-3.5T767-307L616-458q-9-9-11-22t4-24l82-167q5-10-2.5-17.5T671-691l-167 82q-11 6-24 4t-22-11L307-767q-8-8-11.5-16.5T292-802q0-14 7-25.5t20-18.5q38-17 78.5-25.5T480-880Z" />
  </svg>
)

export { IconExploreOffRoundedFilled as default }
