import React from 'react'
import { IconProps } from './types'

const IconLanguageSpanishSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-280v-120h80v40h120v-80H520v-240h280v120h-80v-40H600v80h200v240H520ZM160-680h280v80H240v80h160v80H240v80h200v80H160v-400Z" />
  </svg>
)

export { IconLanguageSpanishSharpFilled as default }
