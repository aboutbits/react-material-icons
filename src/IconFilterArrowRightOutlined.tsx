import React from 'react'
import { IconProps } from './types'

export const IconFilterArrowRightOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-440 129-735q-5-6-7-12.5t-2-12.5q0-16 11.5-28t28.5-12h560q17 0 28.5 12t11.5 28q0 6-2 12.5t-7 12.5L520-440v240q0 17-11.5 28.5T480-160h-80q-17 0-28.5-11.5T360-200v-240Zm400 240-56-56 63-64H600v-80h167l-63-64 56-56 160 160-160 160ZM440-468l198-252H242l198 252Z" />
  </svg>
)
