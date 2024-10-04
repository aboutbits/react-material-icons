import React from 'react'
import { IconProps } from './types'

const IconWashOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l330-214 20 20q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H480v60h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480v60h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480v60h240q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm460-560q-39 0-69.5-30.5T600-740q0-35 23-77.5T700-920q54 60 77 102.5t23 77.5q0 39-30.5 69.5T700-640Z" />
  </svg>
)

export { IconWashOutlinedFilled as default }
