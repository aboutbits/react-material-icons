import React from 'react'
import { IconProps } from './types'

const IconLabResearchRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h40q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280h-40ZM320-80q-83 0-141.5-58.5T120-280v-360q-33 0-56.5-23.5T40-720v-80q0-33 23.5-56.5T120-880h400q33 0 56.5 23.5T600-800v80q0 33-23.5 56.5T520-640v120q0 33-23.5 56.5T440-440h-80q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h80v-120H200v360q0 50 35 85t85 35q18 0 34.5-5t30.5-14q13-8 28-4t23 18q9 14 5 30.5T423-109q-23 14-48.5 21.5T320-80ZM120-720h400v-80H120v80Zm540 520q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0 80q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50t-21 46l80 80q11 11 11 28t-11 28q-11 11-28 11t-28-11l-80-80q-22 14-46 21t-50 7ZM120-720v-80 80Z" />
  </svg>
)

export { IconLabResearchRounded as default }