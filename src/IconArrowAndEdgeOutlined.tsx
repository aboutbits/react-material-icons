import React from 'react'
import { IconProps } from './types'

export const IconArrowAndEdgeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 320-280l56-56 64 63v-167q0-33-23.5-56.5T360-520H120q-33 0-56.5-23.5T40-600v-240h80v240h240q36 0 67 14.5t53 39.5q22-25 53-39.5t67-14.5h240v-240h80v240q0 33-23.5 56.5T840-520H600q-33 0-56.5 23.5T520-440v167l63-63 57 56-160 160Z" />
  </svg>
)
