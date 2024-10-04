import React from 'react'
import { IconProps } from './types'

const IconSmartphoneCameraSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40v-880h560v200H280v480h480v200H200Zm80-80h400v-40H280v40Zm0-680h400v-40H280v40Zm240 480v-280h100l40-40h80l40 40h100v280H520Zm180-70q29 0 49.5-20.5T770-460q0-29-20.5-49.5T700-530q-29 0-49.5 20.5T630-460q0 29 20.5 49.5T700-390ZM280-120v-40 40Zm0-680v-40 40Z" />
  </svg>
)

export { IconSmartphoneCameraSharp as default }
