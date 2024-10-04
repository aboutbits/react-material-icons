import React from 'react'
import { IconProps } from './types.js'

export const IconShopRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m442-280 166-106q18-12 18-34t-18-34L442-560q-20-13-41-2t-21 35v214q0 24 21 35t41-2ZM160-120q-33 0-56.5-23.5T80-200v-480q0-17 11.5-28.5T120-720h200v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h200q17 0 28.5 11.5T880-680v480q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z" />
  </svg>
)