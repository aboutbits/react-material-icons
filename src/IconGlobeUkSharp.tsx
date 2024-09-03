import React from 'react'
import { IconProps } from './types'

const IconGlobeUkSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q18 0 34.5-2t33.5-6l-48-72H360v-40l80-80h80v-120h-80l-40-40v-80h-88v-69l80-118q-101 29-166.5 113T160-480h40v-80h160v80l-40 40v120H203q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560-790v110l80 80v80h47l97 138ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconGlobeUkSharp as default }
