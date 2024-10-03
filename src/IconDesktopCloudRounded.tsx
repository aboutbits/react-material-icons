import React from 'react'
import { IconProps } from './types.js'

export const IconDesktopCloudRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400h260q42 0 71-29.5t29-71.5q0-42-30-71t-72-29q-8-51-47-85t-91-34q-41 0-75 22t-51 59q-48 2-81 36.5T240-520q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560h50v-10q0-29 20.5-49.5T480-640q29 0 49.5 20.5T550-570v50h70q8 0 14 6t6 14q0 8-6 14t-14 6H360Zm40 280v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h40q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h40ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
  </svg>
)
