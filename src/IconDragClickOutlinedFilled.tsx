import React from 'react'
import { IconProps } from './types.js'

export const IconDragClickOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240q-97 0-166-66t-74-162l84 25q13 54 56 88.5T480-320q66 0 113-47t47-113q0-57-34.5-100T517-636l-25-84q96 5 162 74t66 166q0 100-70 170t-170 70Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-18q0-9 2-18l78 24v12q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93h-12l-24-78q9-2 18-2h18q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-59-380L250-631l-50 151L80-880l400 120-151 50 171 171-79 79Z" />
  </svg>
)