import React from 'react'
import { IconProps } from './types'

const IconDevicesFold2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-720h558l160 400H760v320H200Zm176-400h424l-96-240H280l96 240Zm-96 320h400v-240H322l-42-105v345Zm260-440Z" />
  </svg>
)

export { IconDevicesFold2Sharp as default }
