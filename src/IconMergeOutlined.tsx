import React from 'react'
import { IconProps } from './types'

const IconMergeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m256-120-56-56 193-194q23-23 35-52t12-61v-204l-64 63-56-56 160-160 160 160-56 56-64-63v204q0 32 12 61t35 52l193 194-56 56-224-224-224 224Z" />
  </svg>
)

export { IconMergeOutlined as default }
