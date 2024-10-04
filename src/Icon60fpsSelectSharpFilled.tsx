import React from 'react'
import { IconProps } from './types'

const Icon60fpsSelectSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-400v-400h280v80H240v80h200v240H160Zm80-80h120v-80H240v80Zm280 80v-400h280v400H520Zm80-80h120v-240H600v240ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z" />
  </svg>
)

export { Icon60fpsSelectSharpFilled as default }
