import React from 'react'
import { IconProps } from './types'

const IconTrolleyCableCarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-20l60-60H120v-80h40v-440h-40v-80h160v-80h400v80h160v80h-40v440h40v80H660l60 60v20h-80l-80-80H400l-80 80h-80Zm0-160h480v-200H240v200Zm280-280h200v-120H520v120Zm-280 0h200v-120H240v120Zm240 240q25 0 42.5-17.5T540-380q0-25-17.5-42.5T480-440q-25 0-42.5 17.5T420-380q0 25 17.5 42.5T480-320ZM240-480h480-480Z" />
  </svg>
)

export { IconTrolleyCableCarSharp as default }