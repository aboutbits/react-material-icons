import React from 'react'
import { IconProps } from './types'

const IconRowingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720 0 600-120v-60L316-464q-9 2-18 3t-18 1v-88q50 2 102-21.5t84-58.5l56-62q13-15 30.5-22.5T590-720q38 0 64 26t26 64v230q0 26-9.5 47.5T644-314L500-456v-92q-20 17-43 31t-49 25l252 252h60l120 120L720 0ZM220-140l-60-60 180-180 100 100h-80L220-140Zm380-620q-33 0-56.5-23.5T520-840q0-33 23.5-56.5T600-920q33 0 56.5 23.5T680-840q0 33-23.5 56.5T600-760Z" />
  </svg>
)

export { IconRowingSharpFilled as default }
