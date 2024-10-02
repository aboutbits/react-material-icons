import React from 'react'
import { IconProps } from './types'

export const IconSwitchLeftOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-200 120-480l280-280v560Zm-60-145v-270L205-480l135 135Zm220 145v-560l280 280-280 280Z" />
  </svg>
)
