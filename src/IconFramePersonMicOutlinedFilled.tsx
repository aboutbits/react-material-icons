import React from 'react'
import { IconProps } from './types'

const IconFramePersonMicOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-240v-76q0-21 10.5-39.5T239-385q51-30 108-44t117-10q-2 10-3 19.5t-1 19.5q0 48 21 89.5t59 70.5H200Zm240-240q-51 0-85.5-34.5T320-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T440-480ZM160-80q-33 0-56.5-23.5T80-160v-160h80v160h160v80H160ZM80-640v-160q0-33 23.5-56.5T160-880h160v80H160v160H80ZM640-80v-80h160v-160h80v160q0 33-23.5 56.5T800-80H640Zm160-560v-160H640v-80h160q33 0 56.5 23.5T880-800v160h-80ZM640-240v-62q-43-8-71.5-40.5T540-420h40q0 33 23.5 56.5T660-340q33 0 56.5-23.5T740-420h40q0 45-28.5 77.5T680-302v62h-40Zm20-140q-21 0-35.5-14.5T610-430v-80q0-21 14.5-35.5T660-560q21 0 35.5 14.5T710-510v80q0 21-14.5 35.5T660-380Z" />
  </svg>
)

export { IconFramePersonMicOutlinedFilled as default }
