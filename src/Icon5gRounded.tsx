import React from 'react'
import { IconProps } from './types'

const Icon5gRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280H160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h160v-80H160q-17 0-28.5-11.5T120-480v-160q0-17 11.5-28.5T160-680h200q17 0 28.5 11.5T400-640q0 17-11.5 28.5T360-600H200v80h120q33 0 56.5 23.5T400-440v80q0 33-23.5 56.5T320-280Zm240 0q-33 0-56.5-23.5T480-360v-240q0-33 23.5-56.5T560-680h240q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H560v240h200v-80h-60q-17 0-28.5-11.5T660-480q0-17 11.5-28.5T700-520h100q17 0 28.5 11.5T840-480v120q0 33-23.5 56.5T760-280H560Z" />
  </svg>
)

export { Icon5gRounded as default }
