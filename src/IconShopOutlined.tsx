import React from 'react'
import { IconProps } from './types'

const IconShopOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m380-240 280-180-280-180v360ZM160-120q-33 0-56.5-23.5T80-200v-520h240v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h240v520q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
  </svg>
)

export { IconShopOutlined as default }
