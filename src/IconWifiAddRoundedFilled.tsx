import React from 'react'
import { IconProps } from './types'

export const IconWifiAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-120q-17 0-28.5-11.5T720-160v-80h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120Zm-280-26q-12 0-23.5-4.5T436-164L63-537q-13-13-19-28t-6-32q0-17 7-34t22-29q88-69 194-104.5T480-800q113 0 219 35.5T893-660q15 11 22 28t7 34q0 17-6 32.5T897-537l-20 20q-7 7-17 9.5t-19-1.5q-20-7-40-10.5t-40-3.5q-101 0-172 71t-71 172q0 20 3.5 40t10.5 40q3 9 1 19t-9 17q-9 9-20.5 13.5T480-146Z" />
  </svg>
)
