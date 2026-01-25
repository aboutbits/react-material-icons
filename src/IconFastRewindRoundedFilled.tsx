import React from 'react'
import { IconProps } from './types.js'

export const IconFastRewindRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M798-281 550-447q-9-6-13.5-14.5T532-480q0-10 4.5-18.5T550-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-400 0L150-447q-9-6-13.5-14.5T132-480q0-10 4.5-18.5T150-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Z" />
  </svg>
)
