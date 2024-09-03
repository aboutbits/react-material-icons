import React from 'react'
import { IconProps } from './types'

const IconLocalSeeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-220q54 0 97.5-28.5T643-323q-16-14-32-29.5T579-385q-6 38-33.5 61.5T480-300q-42 0-71-29t-29-71q0-42 29.5-70.5T481-500q-12-18-23-36.5T437-574q-59 15-98 63t-39 111q0 75 52.5 127.5T480-220ZM360-800h50q-5 19-7.5 39t-2.5 41h-5l-73 80H160v480h640v-165q20-18 40-37.5t40-39.5v322H80v-640h206l74-80Zm20 400h100-100Zm340 40q121-103 180.5-191T960-714q0-113-72.5-179.5T720-960q-95 0-167.5 66.5T480-714q0 75 59.5 163T720-360Zm0-107q-104-98-132-158t-28-89q0-81 50.5-123.5T720-880q59 0 109.5 42.5T880-714q0 29-28 89T720-467Zm-74-133 28-91-74-59h91l29-90 29 90h91l-74 59 28 91-74-56-74 56Zm74-74Z" />
  </svg>
)

export { IconLocalSeeSharp as default }
