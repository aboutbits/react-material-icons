import React from 'react'
import { IconProps } from './types'

const IconTouchpadMouseOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-80q-91 0-155.5-64.5T440-300v-60h440v60q0 91-64 155.5T660-80Zm-500-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v96q-43-46-100-71t-120-25q-125 0-212.5 87.5T360-420v120q0 37 8.5 72.5T394-160H160Zm280-280q3-75 54-129.5T620-637v197H440Zm260 0v-197q75 13 126 67.5T880-440H700Z" />
  </svg>
)

export { IconTouchpadMouseOutlinedFilled as default }
