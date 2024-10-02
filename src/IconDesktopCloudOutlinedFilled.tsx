import React from 'react'
import { IconProps } from './types'

export const IconDesktopCloudOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400h260q42 0 71-29.5t29-71.5q0-42-30-71t-72-29q-8-51-47-85t-91-34q-41 0-75 22t-51 59q-48 2-81 36.5T240-520q0 50 35 85t85 35Zm-40 280v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320Z" />
  </svg>
)
