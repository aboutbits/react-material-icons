import React from 'react'
import { IconProps } from './types'

const IconDataExplorationRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 23 3 45t9 43l122-122q11-11 26.5-11.5T348-516l104 87 131-131h-23q-17 0-28.5-11.5T520-600q0-17 11.5-28.5T560-640h120q17 0 28.5 11.5T720-600v120q0 17-11.5 28.5T680-440q-17 0-28.5-11.5T640-480v-23L482-346q-11 11-26.5 12T428-344l-103-88-118 118q42 69 113.5 111.5T480-160Zm300 20q17 0 28.5-11.5T820-180q0-17-11.5-28.5T780-220q-17 0-28.5 11.5T740-180q0 17 11.5 28.5T780-140ZM455-480Z" />
  </svg>
)

export { IconDataExplorationRounded as default }
