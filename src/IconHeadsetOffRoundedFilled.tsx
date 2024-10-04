import React from 'react'
import { IconProps } from './types'

const IconHeadsetOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-331q0 40-29.5 39T760-314l-98-98q-19-19-8.5-43.5T691-480h69v-40q0-118-82-199t-198-81q-44 0-83.5 12.5T324-752l-58-56q45-35 99.5-53.5T480-880q74 0 139.5 28T734-775q49 49 77.5 114.5T840-520v189ZM520-40q-17 0-28.5-11.5T480-80q0-17 11.5-28.5T520-120h207l-40-40h-7q-33 0-56.5-23.5T600-240v-7L221-626q-9 24-15 51.5t-6 54.5v40h80q33 0 56.5 23.5T360-400v160q0 33-23.5 56.5T280-160h-80q-33 0-56.5-23.5T120-240v-280q0-45 10.5-87t30.5-80L56-792q-12-12-12-28t12-28q12-11 28-11.5t28 11.5L868-91q14 14 6.5 32.5T847-40H520Z" />
  </svg>
)

export { IconHeadsetOffRoundedFilled as default }
