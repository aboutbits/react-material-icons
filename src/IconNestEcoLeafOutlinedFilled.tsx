import React from 'react'
import { IconProps } from './types'

const IconNestEcoLeafOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M172-172q-11-11-11-28t11-28l55-55q-32-41-49.5-91T160-480q0-134 93-227t227-93h320v320q0 134-93 227t-227 93q-56 0-105.5-17.5T284-227l-56 55q-11 11-28 11t-28-11Zm162-162q11 13 28 12.5t29-12.5l157-157q12-12 12-28.5T548-548q-11-11-28-11t-28 11L334-390q-11 11-11 27.5t11 28.5Z" />
  </svg>
)

export { IconNestEcoLeafOutlinedFilled as default }
