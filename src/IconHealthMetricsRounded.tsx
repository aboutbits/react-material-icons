import React from 'react'
import { IconProps } from './types'

const IconHealthMetricsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80q-33 0-56.5-23.5T280-160v-120H160q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h120v-120q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v120h120q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H680v120q0 33-23.5 56.5T600-80H360ZM160-520h200q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8q10 0 19 5t14 13l68 102h179v-80H640q-17 0-28.5-11.5T600-640v-160H360v160q0 17-11.5 28.5T320-600H160v80Zm0 80v80h160q17 0 28.5 11.5T360-320v160h240v-160q0-17 11.5-28.5T640-360h160v-80H600q-10 0-19-5t-15-13l-34-52-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H160Zm320-40Z" />
  </svg>
)

export { IconHealthMetricsRounded as default }
