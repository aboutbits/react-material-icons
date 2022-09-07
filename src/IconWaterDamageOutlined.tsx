import React from 'react'
import { IconProps } from './types'

const IconWaterDamageOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12,3L2,12h3v8h14v-8h3L12,3z M7,18v-7.81l5-4.5l5,4.5V18H7z M14,14c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,2-4,2-4 S14,12.9,14,14z" />
  </svg>
)

export { IconWaterDamageOutlined as default }
