import React from 'react'
import { IconProps } from './types'

const IconLiveHelpRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600l-92 92q-12 12-28 12t-28-12l-92-92Zm116-120q21 0 35.5-14.5T526-330q0-21-14.5-35.5T476-380q-21 0-35.5 14.5T426-330q0 21 14.5 35.5T476-280Zm70-360q0 17-11 36.5T498-561q-17 15-27.5 28.5T453-505q-4 8-6 16t-4 18q-2 15 8 26t26 11q14 0 25-10t15-27q3-14 11.5-26t27.5-31q35-35 49.5-59t14.5-53q0-54-36.5-87T484-760q-45 0-78 19t-53 53q-7 12-.5 25t20.5 18q13 5 26 0t21-16q11-14 27-22.5t37-8.5q26 0 44 14.5t18 37.5Z" />
  </svg>
)

export { IconLiveHelpRoundedFilled as default }
