import React from 'react'
import { IconProps } from './types'

export const IconOverviewSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m787-145 28-28-75-75v-112h-40v128l87 87Zm-667 25v-720h720v348q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H120Zm80-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
  </svg>
)
