import React from 'react'
import { IconProps } from './types'

const IconCameraOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m448-625 140-240q91 24 161.5 88T852-625H448ZM337-525 200-765q54-53 125.5-84T480-880q13 0 30 1.5t31 3.5L337-525ZM93-380q-6-24-9.5-49T80-480q0-71 23-134t65-115l202 349H93ZM373-95q-91-24-162-88T108-335h403L373-95Zm107 15q-15 0-30.5-2T420-86l203-349 137 240q-54 53-125.5 84T480-80Zm312-151L590-580h277q6 24 9.5 49t3.5 51q0 70-24.5 134T792-231Z" />
  </svg>
)

export { IconCameraOutlinedFilled as default }
