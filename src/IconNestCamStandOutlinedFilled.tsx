import React from 'react'
import { IconProps } from './types.js'

export const IconNestCamStandOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-35 0-59-26.5T160-208l24-280q5-72 42-131t94-95v154q0 66 47 113t113 47q67 0 113.5-47T640-560v-154q57 36 94 95t42 131l24 284q3 35-21 59.5T720-120H240Zm240-360q-33 0-56.5-23.5T400-560v-160q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v160q0 33-23.5 56.5T480-480Z" />
  </svg>
)
