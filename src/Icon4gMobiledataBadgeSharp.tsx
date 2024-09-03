import React from 'react'
import { IconProps } from './types'

const Icon4gMobiledataBadgeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-280h280v-240H660v80h60v80H600v-240h200v-80H520v400Zm-200 0h80v-120h80v-80h-80v-200h-80v200h-80v-200h-80v280h160v120ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Z" />
  </svg>
)

export { Icon4gMobiledataBadgeSharp as default }
