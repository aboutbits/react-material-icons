import React from 'react'
import { IconProps } from './types'

const IconHorizontalDistributeOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h80v800H80Zm340-200v-400h120v400H420ZM800-80v-800h80v800h-80Z" />
  </svg>
)

export { IconHorizontalDistributeOutlined as default }
