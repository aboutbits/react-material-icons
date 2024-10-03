import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsNightSightSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-6-71q34 1 59.5-15.5T782-209q-34-7-61.5-20.5T676-272q-17-29-14.5-60t13.5-63q-39 8-69.5 26.5T562-312q-11 32-6 61t26 55q17 22 40 33t52 12ZM480-480ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-22-11-45-18.5T714-558l63-48-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 57 23.5 107T484-80H370Zm41-279q6-20 14.5-38.5T445-433q-11-8-17-20.5t-6-26.5q0-25 17.5-42.5T482-540q14 0 27 6.5t21 17.5q17-11 35-19.5t38-13.5q-18-32-50-51.5T482-620q-59 0-99.5 41T342-480q0 38 18.5 70.5T411-359Z" />
  </svg>
)
