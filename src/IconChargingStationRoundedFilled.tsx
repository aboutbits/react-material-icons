import React from 'react'
import { IconProps } from './types'

export const IconChargingStationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-440h-48q-11 0-17-9.5t-1-19.5l87-173q4-7 11.5-5.5t7.5 9.5v118h48q11 0 17 9.5t1 19.5l-87 173q-4 7-11.5 5.5T460-322v-118ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z" />
  </svg>
)
