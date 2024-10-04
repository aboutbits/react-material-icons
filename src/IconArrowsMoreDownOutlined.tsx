import React from 'react'
import { IconProps } from './types'

const IconArrowsMoreDownOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-440h80v360h360v80H200Zm200-200v-440h80v360h360v80H400Z" />
  </svg>
)

export { IconArrowsMoreDownOutlined as default }
