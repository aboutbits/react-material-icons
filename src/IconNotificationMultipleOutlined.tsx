import React from 'react'
import { IconProps } from './types'

const IconNotificationMultipleOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80q-33 0-56.5-23.5T40-160v-520h80v520h600v80H120Zm440-334L280-578v258h560v-258L560-414ZM280-240q-33 0-56.5-23.5T200-320v-340q0-21 9.5-40t28.5-30l322-190 80 47-352 207 272 160 270-160q15-9 30.5-8.5T890-666q14 8 22 21.5t8 30.5v294q0 33-23.5 56.5T840-240H280Zm280-320L448-672l56-56 56 56 142-142 56 56-198 198Zm0 240h280-560 280Z" />
  </svg>
)

export { IconNotificationMultipleOutlined as default }