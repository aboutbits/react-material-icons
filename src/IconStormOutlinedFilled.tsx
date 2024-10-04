import React from 'react'
import { IconProps } from './types'

const IconStormOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M726-80q25-62 35-127t5-131q-39 83-116.5 130.5T480-160q-84 0-152-39.5T212-305q-48-66-74-151.5T112-634q0-63 8.5-124.5T150-880h84q-24 62-34.5 127T194-622q39-83 116.5-130.5T480-800q84 0 152 39.5T748-655q48 66 74 151.5T848-326q0 63-8.5 124.5T810-80h-84ZM480-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z" />
  </svg>
)

export { IconStormOutlinedFilled as default }
