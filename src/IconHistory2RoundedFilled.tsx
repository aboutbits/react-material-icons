import React from 'react'
import { IconProps } from './types.js'

export const IconHistory2RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-142 0-250.5-87T90-389q-4-17 6-30.5t27-15.5q17-2 30 8t18 27q27 105 112.5 172.5T480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-86 0-159.5 42.5T204-640h76q17 0 28.5 11.5T320-600q0 17-11.5 28.5T280-560H144q-22 0-35-17.5t-6-37.5q42-118 145-191.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-416 100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L452-452q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144Z" />
  </svg>
)