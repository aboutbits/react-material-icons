import React from 'react'
import { IconProps } from './types'

const IconDeveloperModeTvOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM192-520l104-104-56-56L80-520l160 160 56-56-104-104Zm576 0L664-416l56 56 160-160-160-160-56 56 104 104Z" />
  </svg>
)

export { IconDeveloperModeTvOutlinedFilled as default }
