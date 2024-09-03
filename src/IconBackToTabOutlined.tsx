import React from 'react'
import { IconProps } from './types'

const IconBackToTabOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M331-492 160-663v143H80v-280h280v80H216l172 171-57 57ZM160-160q-33 0-56.5-23.5T80-240v-200h80v200h320v80H160Zm640-280v-280H440v-80h360q33 0 56.5 23.5T880-720v280h-80Zm80 80v200H560v-200h320Z" />
  </svg>
)

export { IconBackToTabOutlined as default }