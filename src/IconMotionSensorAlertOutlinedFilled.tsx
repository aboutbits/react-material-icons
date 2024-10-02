import React from 'react'
import { IconProps } from './types'

export const IconMotionSensorAlertOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-160h80v160h160v80H160ZM80-720v-160q0-33 23.5-56.5T160-960h160v80H160v160H80Zm360 436q-92-14-157-79t-79-157h80q12 59 54.5 101.5T440-364v80ZM204-600q14-92 79-157.5T440-836v80q-59 12-101.5 54.5T284-600h-80Zm276 120q-33 0-56.5-23.5T400-560q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T480-480Zm196-120q-12-59-54.5-101.5T520-756v-80q92 14 157.5 79T756-600h-80Zm124-120v-160H640v-80h160q33 0 56.5 23.5T880-880v160h-80ZM760-80q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Z" />
  </svg>
)
