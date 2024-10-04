import React from 'react'
import { IconProps } from './types'

const IconCropRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80v-120H280q-33 0-56.5-23.5T200-280v-400H80q-17 0-28.5-11.5T40-720q0-17 11.5-28.5T80-760h120v-120q0-17 11.5-28.5T240-920q17 0 28.5 11.5T280-880v600h600q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200H760v120q0 17-11.5 28.5T720-40q-17 0-28.5-11.5T680-80Zm0-280v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z" />
  </svg>
)

export { IconCropRoundedFilled as default }
