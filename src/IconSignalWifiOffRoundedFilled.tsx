import React from 'react'
import { IconProps } from './types.js'

export const IconSignalWifiOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M717-374q-8 0-15-2.5t-13-8.5L341-732q-5-5-7.5-11.5T331-756q0-11 6.5-21t19.5-12q30-5 61-8t62-3q125 0 239.5 43.5T928-628q7 6 10 14t3 16q0 8-2.5 15t-8.5 13L745-385q-6 6-13 8.5t-15 2.5Zm74 317L604-244l-96 96q-12 12-28 12t-28-12L30-570q-12-12-12-30t13-29q26-23 53-43t55-36l-84-84q-12-12-11.5-28T56-848q12-12 28.5-12t28.5 12l735 735q12 12 12 28t-12 28q-12 12-28.5 12T791-57Z" />
  </svg>
)
