import React from 'react'
import { IconProps } from './types'

export const IconSolarPowerOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 80-400h640l80 400H80Zm40-720v-80h120v80H120Zm58 640h262v-80H194l-16 80Zm67-427-57-56 85-85 57 56-85 85Zm-35 267h230v-80H226l-16 80Zm270-360q-83 0-141.5-58.5T280-880h80q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T480-680Zm0-200Zm-40 360v-120h80v120h-80Zm80 360h262l-16-80H520v80Zm0-160h230l-16-80H520v80Zm195-267-84-85 56-56 85 84-57 57Zm5-213v-80h120v80H720Z" />
  </svg>
)
