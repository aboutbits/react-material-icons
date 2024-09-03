import React from 'react'
import { IconProps } from './types'

const IconDevicesWearablesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-240q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h320q33 0 56.5 23.5T560-800v154q-23 12-43 27.5T480-584v-96H160v400h257q17 51 51 92t81 68q-11 19-29.5 29.5T480-80H160Zm440 0v-104q-56-28-88-80.5T480-380q0-63 32-115.5t88-80.5v-104h200v104q56 28 88 80.5T920-380q0 63-32 115.5T800-184v104H600Z" />
  </svg>
)

export { IconDevicesWearablesOutlinedFilled as default }
