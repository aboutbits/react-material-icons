import React from 'react'
import { IconProps } from './types'

export const IconStat1RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-528 324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Z" />
  </svg>
)
