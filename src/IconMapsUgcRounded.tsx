import React from 'react'
import { IconProps } from './types'

const IconMapsUgcRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M118-308q-19-41-28.5-84T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-45 0-88-9.5T308-118L110-60q-23 7-40-10t-10-40l58-198Zm40 150 128-38q14-4 28.5-3t27.5 7q32 16 67 24t71 8q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 36 8 71t24 67q7 13 7.5 27.5T196-286l-38 128Zm282-282v80q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-80h80q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520h-80v-80q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v80h-80q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h80Zm39-39Z" />
  </svg>
)

export { IconMapsUgcRounded as default }
