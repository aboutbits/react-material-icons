import React from 'react'
import { IconProps } from './types'

export const IconCirclesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-920q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-100 70-170t170-70Zm4 561q29 0 56.5-6t53.5-17q-21 131-121 216.5T440-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-440q0-133 85.5-233T382-794q-11 27-16.5 56t-5.5 58q2 134 96 227.5T684-359Z" />
  </svg>
)
