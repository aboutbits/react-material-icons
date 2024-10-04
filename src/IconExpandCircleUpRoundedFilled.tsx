import React from 'react'
import { IconProps } from './types'

const IconExpandCircleUpRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-507 95 95q11 11 27.5 11t28.5-11q12-12 12-28.5T631-469L508-592q-12-12-28-12t-28 12L328-468q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l95-95Zm0 427q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconExpandCircleUpRoundedFilled as default }
