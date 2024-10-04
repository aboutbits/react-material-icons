import React from 'react'
import { IconProps } from './types'

const IconRailwayAlertRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-480q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6ZM400-280q25 0 42.5-17.5T460-340q0-25-17.5-42.5T400-400q-25 0-42.5 17.5T340-340q0 25 17.5 42.5T400-280ZM199-80q-11 0-18.5-6T170-101q-3-9 0-18.5t12-15.5l38-25q-58 0-99-41t-41-99v-380q0-72 66.5-110T362-837q29-2 45 22.5t5 53.5q-6 20-9 41.5t-3 42.5q0 15-9.5 26T366-640H160v120h260q14 0 27 6.5t22 17.5q17 20 37 35.5t43 27.5q32 17 66.5 25.5T686-400q14 0 24 8.5t10 22.5v69q0 58-41 99t-99 41l38 25q9 6 12 15.5t0 18.5q-3 9-10.5 15T601-80H199Zm481-480q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
  </svg>
)

export { IconRailwayAlertRoundedFilled as default }
