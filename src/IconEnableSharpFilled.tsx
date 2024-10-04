import React from 'react'
import { IconProps } from './types.js'

export const IconEnableSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-132 77-237.5T360-862v86q-91 37-145.5 117.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-98-54.5-178.5T600-776v-86q126 39 203 144.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-240L280-520l56-56 104 103v-407h80v407l104-103 56 56-200 200Z" />
  </svg>
)