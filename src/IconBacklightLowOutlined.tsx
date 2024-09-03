import React from 'react'
import { IconProps } from './types'

const IconBacklightLowOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-360v-80h120v80H80Zm174-210-85-85 56-56 85 85-56 56Zm26 330v-120h400v120H280Zm160-440v-120h80v120h-80Zm266 111-56-57 85-85 56 57-85 85Zm54 209v-80h120v80H760Z" />
  </svg>
)

export { IconBacklightLowOutlined as default }
