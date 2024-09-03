import React from 'react'
import { IconProps } from './types'

const IconSettingsPanoramaRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M570-82q-19 5-34.5-6.5T520-120v-200q0-20 15.5-31.5T571-358q37 10 74 14t75 4q38 0 75.5-4t74.5-14q19-5 34.5 6.5T920-320v200q0 20-15.5 31.5T870-82q-37-10-74.5-14t-75.5-4q-38 0-75.5 4T570-82Zm-90-398Zm0 0ZM440-80h-35q-15 0-26-10t-13-25l-12-91q-13-5-24.5-12T307-233l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l8-66q3-27 23-44.5t47-17.5h96q27 0 47 17.5t23 44.5l8 66q13 5 24.5 12t22.5 15l60-26q25-11 50.5-2t39.5 32l47 82q14 23 8.5 49T832-545l-53 38q1 7 1 13v13q0 17-12.5 29T737-440q-16 0-26.5-12T700-481q0-15-2-30t-7-30l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184Zm42-540q56 0 96 38t44 94q2 20-9.5 35.5T581-436q-17 1-29.5-10.5T541-475q4-26-14-45.5T482-540q-25 0-42.5 17.5T422-480q0 14 5.5 25.5T443-435q11 10 10 25.5T440-383q-14 12-32.5 10.5T376-388q-18-18-26-42t-8-50q0-59 41-99.5t99-40.5Z" />
  </svg>
)

export { IconSettingsPanoramaRounded as default }