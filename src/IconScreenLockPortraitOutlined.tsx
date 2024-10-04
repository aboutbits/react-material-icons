import React from 'react'
import { IconProps } from './types'

const IconScreenLockPortraitOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M394-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H394Zm46-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
  </svg>
)

export { IconScreenLockPortraitOutlined as default }
