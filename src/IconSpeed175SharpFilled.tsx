import React from 'react'
import { IconProps } from './types'

const IconSpeed175SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-80h80v80h-80Zm360 0v-80h160v-80H640v-240h240v80H720v80h160v240H640Zm-480 0v-320H80v-80h160v400h-80Zm280 0 80-320H360v-80h242v74l-82 326h-80Z" />
  </svg>
)

export { IconSpeed175SharpFilled as default }
