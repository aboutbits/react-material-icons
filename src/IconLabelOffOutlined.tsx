import React from 'react'
import { IconProps } from './types'

export const IconLabelOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m757-317-57-57 80-106-180-240H354l-80-80h326q19 0 36 8.5t28 23.5l216 288-123 163Zm-597 77h448L160-688v448ZM820-28 661-187q-10 13-24 20t-31 7H160q-33 0-56.5-23.5T80-240v-480q0-11 2.5-20.5T90-758l-62-62 56-56L876-84l-56 56ZM567-547Zm-183 83Z" />
  </svg>
)
