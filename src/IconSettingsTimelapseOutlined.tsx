import React from 'react'
import { IconProps } from './types'

const IconSettingsTimelapseOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-120v-240l200 120-200 120Zm-200 0v-240l200 120-200 120Zm-40-360ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v33.5q0 10-2 20h-82q2-10 3-20t1-20q-1-19-3-33.5t-6-27.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184h-70Zm70-266v-91q-8-8-13-19t-5-24q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 11-3.5 21.5T527-440h89q3-10 4.5-19.5T622-480q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50Z" />
  </svg>
)

export { IconSettingsTimelapseOutlined as default }
