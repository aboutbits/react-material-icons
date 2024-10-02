import React from 'react'
import { IconProps } from './types'

export const Icon2dOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-360h180v-60H320v-40h80q17 0 28.5-11.5T440-500v-60q0-17-11.5-28.5T400-600H260v60h120v40h-80q-17 0-28.5 11.5T260-460v100Zm260 0h160q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H520v240Zm60-60v-120h80v120h-80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)
