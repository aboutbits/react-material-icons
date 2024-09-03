import React from 'react'
import { IconProps } from './types'

const IconMemoryRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400v-160q0-17 11.5-28.5T400-600h160q17 0 28.5 11.5T600-560v160q0 17-11.5 28.5T560-360H400q-17 0-28.5-11.5T360-400Zm0 240v-40h-80q-33 0-56.5-23.5T200-280v-80h-40q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h40v-80h-40q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h40v-80q0-33 23.5-56.5T280-760h80v-40q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v40h80v-40q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v40h80q33 0 56.5 23.5T760-680v80h40q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520h-40v80h40q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-40v80q0 33-23.5 56.5T680-200h-80v40q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160v-40h-80v40q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160Zm320-120v-400H280v400h400Z" />
  </svg>
)

export { IconMemoryRoundedFilled as default }
