import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsVideoCameraRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M411-80q-17 0-30-11t-15-28l-12-89q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l8-66q3-27 23-44.5t47-17.5h96q27 0 47 17.5t23 44.5l8 66q13 5 24.5 12t22.5 15l60-26q25-11 50.5-2t39.5 32l47 82q14 23 8.5 49T832-547l-67 51q-11 8-22.5 12t-25.5 4h-94q0-58-41.5-99T482-620q-59 0-99.5 40.5T342-480q0 48 27.5 84t70.5 50v232q0 14-8 24t-21 10Zm389 0H560q-17 0-28.5-11.5T520-120v-240q0-17 11.5-28.5T560-400h240q17 0 28.5 11.5T840-360v80l63-63q5-5 11-2.5t6 9.5v192q0 7-6 9.5t-11-2.5l-63-63v80q0 17-11.5 28.5T800-80Z" />
  </svg>
)
