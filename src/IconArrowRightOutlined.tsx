import React from 'react'
import { IconProps } from './types'

const IconArrowRightOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-280v-400l200 200-200 200Z" />
  </svg>
)

export { IconArrowRightOutlined as default }
