import React from 'react'
import { IconProps } from './types'

export const IconFileDownloadOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 686-160H240q-33 0-56.5-23.5T160-240v-120h80v120h366L503-343l-23 23-200-200 23-23L55-791l57-57 736 736-57 57ZM617-457l-57-57 64-64 56 58-63 63Zm-97-97-80-80v-166h80v246Zm280 280-80-80v-6h80v86Z" />
  </svg>
)
