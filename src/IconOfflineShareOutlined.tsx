import React from 'react'
import { IconProps } from './types'

const IconOfflineShareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40q-33 0-56.5-23.5T160-120v-640h80v640h400v80H240Zm160-160q-33 0-56.5-23.5T320-280v-560q0-33 23.5-56.5T400-920h320q33 0 56.5 23.5T800-840v560q0 33-23.5 56.5T720-200H400Zm0-120v40h320v-40H400Zm0-80h320v-320H400v320Zm40-80v-90q0-17 11.5-28.5T480-610h86l-28-28 42-42 100 100-100 100-42-42 28-28h-66v70h-60Zm-40-320h320v-40H400v40Zm0 0v-40 40Zm0 480v40-40Z" />
  </svg>
)

export { IconOfflineShareOutlined as default }
