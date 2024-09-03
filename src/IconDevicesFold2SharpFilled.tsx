import React from 'react'
import { IconProps } from './types'

const IconDevicesFold2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-720h558l160 400H760v320H200Zm80-80h400v-240H322l-42-105v345Z" />
  </svg>
)

export { IconDevicesFold2SharpFilled as default }
