import React from 'react'
import { IconProps } from './types'

export const IconTabCloseRightOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m366-310 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56ZM200-200v-560 560-1 1Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v334q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H200Zm560 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Z" />
  </svg>
)
