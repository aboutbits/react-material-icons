import React from 'react'
import { IconProps } from './types'

export const IconRailwayAlertRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M178-720h234-234Zm21 640q-11 0-18.5-6T170-101q-3-9 0-18.5t12-15.5l38-25q-58 0-99-41t-41-99v-380q0-88 79.5-124T400-840q17 0 28.5 11.5T440-800q0 17-10.5 28.5T402-760q-96 0-150 11.5T178-720h182q17 0 28.5 11.5T400-680q0 17-11.5 28.5T360-640H160v120h321q17 0 28 11.5t11 28.5q0 17-11.5 28.5T480-440H160v140q0 25 17.5 42.5T220-240h360q25 0 42.5-17.5T640-300v-59q0-17 11.5-28.5T680-399q17 0 28.5 11.5T720-359v59q0 58-41 99t-99 41l38 25q9 6 12 15.5t0 18.5q-3 9-10.5 15T601-80H199Zm481-400q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM400-280q25 0 42.5-17.5T460-340q0-25-17.5-42.5T400-400q-25 0-42.5 17.5T340-340q0 25 17.5 42.5T400-280Zm240-160H160h480Z" />
  </svg>
)
