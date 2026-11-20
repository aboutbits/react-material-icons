import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconViewWeekSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm240 80H80v-640h800v640Z" />
  </svg>
)
