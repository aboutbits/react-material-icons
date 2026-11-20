import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconAlignCenterOutlined: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-440v-80h800v80H80Zm200-120v-120h400v120H280Zm0 280v-120h400v120H280Z" />
  </svg>
)
