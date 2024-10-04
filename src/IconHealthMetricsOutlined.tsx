import React from 'react'
import { IconProps } from './types'

const IconHealthMetricsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM160-520h200q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8q10 0 19 5t14 13l68 102h179v-80H600v-200H360v200H160v80Zm200 360h240v-200h200v-80H600q-10 0-19-5t-15-13l-34-52-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H160v80h200v200Zm120-320Z" />
  </svg>
)

export { IconHealthMetricsOutlined as default }
