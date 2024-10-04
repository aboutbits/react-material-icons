import React from 'react'
import { IconProps } from './types'

const IconLineStartSquareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-340h280v-280H160v280Zm360 80H80v-440h440v180h360v80H520v180ZM300-480Z" />
  </svg>
)

export { IconLineStartSquareOutlined as default }
