import React from 'react'
import { IconProps } from './types'

const IconArrowTopRightOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-480h447L503-783l57-57 240 240-241 241-56-57 144-144H280v400h-80Z" />
  </svg>
)

export { IconArrowTopRightOutlined as default }
