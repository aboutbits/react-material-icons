import React from 'react'
import { IconProps } from './types'

const IconFoundationOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-160h-80v-80h80v-166L88-440l-48-64 440-336 440 336-48 64-112-86v166h80v80h-80v160h-80v-160H520v160h-80v-160H280v160h-80Zm80-240h160v-349L280-587v227Zm240 0h160v-227L520-709v349Z" />
  </svg>
)

export { IconFoundationOutlined as default }
