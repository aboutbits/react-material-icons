import React from 'react'
import { IconProps } from './types'

const IconHPlusMobiledataOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-400h80v160h240v-160h80v400h-80v-160H240v160h-80Zm560-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconHPlusMobiledataOutlined as default }
