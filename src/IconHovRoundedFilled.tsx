import React from 'react'
import { IconProps } from './types'

const IconHovRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-118q-10 0-19-4.5T446-137L265-439q-6-10-9-20t-3-21q0-11 3-21t9-20l181-302q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l181 302q6 10 9 20t3 21q0 11-3 21t-9 20L514-137q-6 10-15 14.5t-19 4.5Z" />
  </svg>
)

export { IconHovRoundedFilled as default }
