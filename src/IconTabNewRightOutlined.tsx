import React from 'react'
import { IconProps } from './types'

const IconTabNewRightOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-560 560-1 1Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v334q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H200Zm560 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40ZM440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Z" />
  </svg>
)

export { IconTabNewRightOutlined as default }
