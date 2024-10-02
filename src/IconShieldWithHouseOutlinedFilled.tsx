import React from 'react'
import { IconProps } from './types'

export const IconShieldWithHouseOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-578 290 225q-29 79-83.5 142.5T560-110v-249H400v249q-72-37-126.5-100.5T190-353l290-225Zm0-301 320 120v243q0 20-2 39.5t-5 39.5L480-679 167-437q-4-20-5.5-39.5T160-516v-243l320-120Z" />
  </svg>
)
