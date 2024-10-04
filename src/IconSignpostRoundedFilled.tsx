import React from 'react'
import { IconProps } from './types.js'

export const IconSignpostRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-120H273q-16 0-30.5-6T217-263l-69-69q-12-12-12-28t12-28l69-69q11-11 25.5-17t30.5-6h167v-80H200q-17 0-28.5-11.5T160-600v-160q0-17 11.5-28.5T200-800h240v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h167q16 0 30.5 6t25.5 17l69 69q12 12 12 28t-12 28l-69 69q-11 11-25.5 17t-30.5 6H520v80h240q17 0 28.5 11.5T800-440v160q0 17-11.5 28.5T760-240H520v120q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Z" />
  </svg>
)