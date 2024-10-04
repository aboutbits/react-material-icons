import React from 'react'
import { IconProps } from './types'

const IconAttachFileAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v260q0 17-11.5 28.5T540-400q-17 0-28.5-11.5T500-440v-260q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q17 0 32-3.5t29-8.5q16-6 31 .5t21 22.5q6 16-.5 31T560-97q-21 8-43.5 12.5T470-80Zm210-40q-17 0-28.5-11.5T640-160v-80h-80q-17 0-28.5-11.5T520-280q0-17 11.5-28.5T560-320h80v-80q0-17 11.5-28.5T680-440q17 0 28.5 11.5T720-400v80h80q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240h-80v80q0 17-11.5 28.5T680-120ZM400-280q-17 0-28.5-11.5T360-320v-360q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v360q0 17-11.5 28.5T400-280Zm280-240q-17 0-28.5-11.5T640-560v-120q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680v120q0 17-11.5 28.5T680-520Z" />
  </svg>
)

export { IconAttachFileAddRoundedFilled as default }
