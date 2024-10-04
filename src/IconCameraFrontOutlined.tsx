import React from 'react'
import { IconProps } from './types'

const IconCameraFrontOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m394-60-56-56 44-44H200v-80h182l-44-44 56-56 140 140L394-60ZM200-280v-520q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v520h-80v-62q-40-29-90.5-43.5T480-400q-59 0-109.5 14.5T280-342v62h-80Zm80-154q48-23 98.5-34.5T480-480q51 0 101.5 11.5T680-434v-366H280v366Zm280 274v-80h200v80H560Zm-80-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 200Zm0-240Z" />
  </svg>
)

export { IconCameraFrontOutlined as default }
