import React from 'react'
import { IconProps } from './types'

const IconNestHelloDoorbellOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-141.5-58.5T280-280v-400q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680v400q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85v-400q0-50-35-85t-85-35q-50 0-85 35t-35 85v400q0 50 35 85t85 35Zm0-400q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 80Zm0 240q33 0 56.5-23.5T560-320q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320q0 33 23.5 56.5T480-240Zm0-40q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Z" />
  </svg>
)

export { IconNestHelloDoorbellOutlined as default }
