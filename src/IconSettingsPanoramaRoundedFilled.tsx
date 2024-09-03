import React from 'react'
import { IconProps } from './types'

const IconSettingsPanoramaRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M570-82q-19 5-34.5-6.5T520-120v-200q0-20 15.5-31.5T571-358q37 10 74 14t75 4q38 0 75.5-4t74.5-14q19-5 34.5 6.5T920-320v200q0 20-15.5 31.5T870-82q-37-10-74.5-14t-75.5-4q-38 0-75.5 4T570-82Zm-88-538q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50v231q0 14-10.5 24.5T405-80q-15 0-26-10t-13-25l-11-91q-13-5-24.5-12T308-233l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l8-66q3-27 23-44.5t47-17.5h96q27 0 47 17.5t23 44.5l8 66q13 5 24.5 12t22.5 15l60-26q25-11 50.5-2t39.5 32l47 82q14 23 8.5 49T833-545l-54 38q1 5 1 12.5v15.5q0 17-12 28t-29 11H616q3-10 4.5-19.5T622-480q0-58-41-99t-99-41Z" />
  </svg>
)

export { IconSettingsPanoramaRoundedFilled as default }
