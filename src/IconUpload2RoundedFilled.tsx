import React from 'react'
import { IconProps } from './types'

const IconUpload2RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160Zm200-80q-17 0-28.5-11.5T360-280v-240h-78q-25 0-36-22.5t4-42.5l198-254q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l198 254q15 20 4 42.5T678-520h-78v240q0 17-11.5 28.5T560-240H400Z" />
  </svg>
)

export { IconUpload2RoundedFilled as default }
