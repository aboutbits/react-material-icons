import React from 'react'
import { IconProps } from './types'

export const IconDownloadForOfflineRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h320q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm120-274-36-35q-11-11-27.5-11T348-588q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11.5-27.5T612-588q-11-11-27.5-11.5T556-589l-36 35v-126q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680v126Zm40 474q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
