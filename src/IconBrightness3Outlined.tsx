import React from 'react'
import { IconProps } from './types'

export const IconBrightness3Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M507-196q80-42 126.5-118T680-480q0-90-46.5-166T507-764q45 62 69 134.5T600-480q0 77-24 149.5T507-196ZM360-80q-31 0-61-4.5T240-98q125-41 202.5-146T520-480q0-131-77.5-236T240-862q29-9 59-13.5t61-4.5q83 0 156 31.5T643-763q54 54 85.5 127T760-480q0 83-31.5 156T643-197q-54 54-127 85.5T360-80Zm240-400Z" />
  </svg>
)
