import React from 'react'
import { IconProps } from './types'

const IconDiscFullRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm360 200q-17 0-28.5-11.5T800-280v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v240q0 17-11.5 28.5T840-240Zm0 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-360 0q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q103 0 191 48.5T814-699q13 19 1 39t-36 20h-19q-17 0-28.5 11.5T720-600v411q0 14-6.5 25.5T696-144q-49 31-104 47.5T480-80Z" />
  </svg>
)

export { IconDiscFullRoundedFilled as default }
