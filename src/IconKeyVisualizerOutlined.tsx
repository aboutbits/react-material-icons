import React from 'react'
import { IconProps } from './types'

const IconKeyVisualizerOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h120v80H120Zm0-160v-80h320v80H120Zm0-160v-80h720v80H120Zm0-160v-80h320v80H120Zm0-160v-80h120v80H120Zm200 640v-80h120v80H320Zm0-640v-80h120v80H320Zm200 640v-80h120v80H520Zm0-160v-80h320v80H520Zm0-320v-80h320v80H520Zm0-160v-80h120v80H520Zm200 640v-80h120v80H720Zm0-640v-80h120v80H720Z" />
  </svg>
)

export { IconKeyVisualizerOutlined as default }
