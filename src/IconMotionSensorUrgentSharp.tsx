import React from 'react'
import { IconProps } from './types'

const IconMotionSensorUrgentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m491-80 229-401L949-80H491Zm229-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160ZM80-80v-240h80v160h160v80H80Zm0-560v-240h240v80H160v160H80Zm360 436q-92-14-157-79t-79-157h80q12 59 54.5 101.5T440-284v80ZM204-520q14-92 79-157.5T440-756v80q-59 12-101.5 54.5T284-520h-80Zm276 120q-33 0-56.5-23.5T400-480q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T480-400Zm196-120q-12-59-54.5-101.5T520-676v-80q92 14 157.5 79T756-520h-80Zm124-120v-160H640v-80h240v240h-80Z" />
  </svg>
)

export { IconMotionSensorUrgentSharp as default }
