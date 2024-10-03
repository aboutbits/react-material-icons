import React from 'react'
import { IconProps } from './types.js'

export const IconBookmarkCheckRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-513-29-29q-12-11-28-11t-28 12q-12 12-12 28t12 28l56 57q12 12 28.5 12t28.5-12l141-142q12-12 12-28t-12-28q-12-12-28-12t-28 12L438-513Zm42 273-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Z" />
  </svg>
)
