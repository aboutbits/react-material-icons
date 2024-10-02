import React from 'react'
import { IconProps } from './types'

export const IconPhotoSizeSelectSmallOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120H200q-33 0-56.5-23.5T120-200v-320h400v400Zm-360-80h320L376-340l-76 100-56-74-84 114Zm40-560h-80q0-33 23.5-56.5T200-840v80Zm80 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80q33 0 56.5 23.5T840-760h-80ZM120-600v-80h80v80h-80Zm640 400h80q0 33-23.5 56.5T760-120v-80Zm0-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
  </svg>
)
