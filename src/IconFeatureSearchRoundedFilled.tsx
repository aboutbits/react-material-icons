import React from 'react'
import { IconProps } from './types'

export const IconFeatureSearchRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M620-520q-75 0-127.5-52.5T440-700q0-75 52.5-127.5T620-880q75 0 127.5 52.5T800-700q0 27-8 51t-20 45l100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L716-548q-21 12-45 20t-51 8Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h172q17 0 28 14.5t6 31.5q-3 14-4 29t-1 29q0 109 77 182t183 73q19 0 38-2.5t39-8.5l79 79q11 11 17 25.5t6 30.5v157q0 33-23.5 56.5T720-80H160Z" />
  </svg>
)
