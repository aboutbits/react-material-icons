import React from 'react'
import { IconProps } from './types'

const IconDesktopAccessDisabledOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m127-833 73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h-48v80h80v80H320v-80h80v-80H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm701 587-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 46T828-246ZM534-540Zm-190 36Z" />
  </svg>
)

export { IconDesktopAccessDisabledOutlined as default }
