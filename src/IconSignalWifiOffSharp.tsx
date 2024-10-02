import React from 'react'
import { IconProps } from './types'

export const IconSignalWifiOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m717-357-57-57 184-184q-79-60-172-91t-192-31q-29 0-58 3t-58 8l-66-66q45-12 90-18.5t92-6.5q136 0 260.5 51.5T960-600L717-357ZM480-234l67-66-350-350q-21 11-41 24.5T116-598l364 364ZM819-28 604-244 480-120 0-600q32-32 66.5-59t72.5-49L27-820l57-57L876-85l-57 57ZM512-562Zm-140 87Z" />
  </svg>
)
