import React from 'react'
import { IconProps } from './types'

const IconCameraRearOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m394-60-56-56 44-44H200v-80h182l-44-44 56-56 140 140L394-60Zm166-100v-80h200v80H560ZM200-280v-520q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v520H511L394-397 277-280h-77Zm280-280q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Z" />
  </svg>
)

export { IconCameraRearOutlinedFilled as default }
