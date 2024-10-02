import React from 'react'
import { IconProps } from './types'

export const IconBugReportRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-65 0-120.5-32T272-240h-72q-17 0-28.5-11.5T160-280q0-17 11.5-28.5T200-320h44q-3-20-3.5-40t-.5-40h-40q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h40q0-20 .5-40t3.5-40h-44q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h72q14-23 31.5-43t40.5-35l-37-38q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l58 58q28-9 57-9t57 9l60-59q11-11 27.5-11t28.5 12q11 11 11 28t-11 28l-38 38q23 15 41.5 34.5T688-640h72q17 0 28.5 11.5T800-600q0 17-11.5 28.5T760-560h-44q3 20 3.5 40t.5 40h40q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400h-40q0 20-.5 40t-3.5 40h44q17 0 28.5 11.5T800-280q0 17-11.5 28.5T760-240h-72q-32 56-87.5 88T480-120Zm0-80q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-40-120h80q17 0 28.5-11.5T560-360q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360q0 17 11.5 28.5T440-320Zm0-160h80q17 0 28.5-11.5T560-520q0-17-11.5-28.5T520-560h-80q-17 0-28.5 11.5T400-520q0 17 11.5 28.5T440-480Zm40 40Z" />
  </svg>
)
