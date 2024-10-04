import React from 'react'
import { IconProps } from './types.js'

export const IconVoiceSelectionOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m855-220-64-64q20-81-3-160t-83-138l56-58q55 54 87 126t32 156q0 36-6.5 71T855-220ZM532-541 398-676l-74-146 72-36 131 262q7 14 8 27.5t-3 27.5ZM80-80v-80q46 0 91-6t88-22q-46-23-72.5-66.5T160-349v-91h160v-120h81l80 80h-81v40q0 33-23.5 56.5T320-360h-80v11q0 35 21.5 61.5T316-252l12 3q40 10 45 50t-31 60q-60 33-126.5 46T80-80Zm740 53L28-820l56-56L876-84l-56 57Z" />
  </svg>
)
