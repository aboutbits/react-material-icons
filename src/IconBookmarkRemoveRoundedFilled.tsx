import React from 'react'
import { IconProps } from './types.js'

export const IconBookmarkRemoveRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-680q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h225q18 0 27 16t1 33q-7 17-10 34t-3 37q0 72 45.5 127T680-524q12 2 21.5 2.5t18.5.5q17 0 28.5 10.5T760-484v243q0 43-36 66.5t-76 6.5l-168-72Z" />
  </svg>
)
