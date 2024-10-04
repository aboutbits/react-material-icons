import React from 'react'
import { IconProps } from './types.js'

export const IconCachedRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M482-160q-134 0-228-93t-94-227v-7l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v7q0 100 70.5 170T482-240q16 0 31.5-2t30.5-7q17-5 32 1t23 21q8 16 1.5 31.5T577-175q-23 8-47 11.5t-48 3.5Zm-4-560q-16 0-31.5 2t-30.5 7q-17 5-32.5-1T360-733q-8-15-1.5-30.5T381-784q24-8 48-12t49-4q134 0 228 93t94 227v7l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L788-349q-12 12-28 12t-28-12L628-453q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-7q0-100-70.5-170T478-720Z" />
  </svg>
)