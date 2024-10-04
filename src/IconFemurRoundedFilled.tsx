import React from 'react'
import { IconProps } from './types'

const IconFemurRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M396-77q-44 0-77-27.5T278-176q-3-18-13.5-29.5T234-217q-3 0-6 .5t-5 .5q-56 11-99.5-25.5T80-335q0-42 27.5-76t72.5-42l118-21 133-191q-14-14-22-33t-8-39q0-42 28-70.5t69-28.5q26 0 44 9.5t26 15.5q9 7 20.5 10t25.5 4q8-25 25.5-44t41.5-28q44-17 85 2.5t57 61.5l51 141q17 46-4 86.5T810-524q-36 12-69 2.5T686-556h-37L494-335l21 116q11 56-25.5 99T396-77Z" />
  </svg>
)

export { IconFemurRoundedFilled as default }
