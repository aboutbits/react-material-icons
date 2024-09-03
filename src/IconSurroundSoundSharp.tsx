import React from 'react'
import { IconProps } from './types'

const IconSurroundSoundSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm198 78q40-40 61-91t21-107q0-56-21-107t-61-91l-56 56q29 29 43.5 65.5T680-480q0 40-14.5 76.5T622-338l56 56Zm-396 0 56-56q-29-29-43.5-65.5T280-480q0-40 14.5-76.5T338-622l-56-56q-40 40-61 91t-21 107q0 56 21 107t61 91ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconSurroundSoundSharp as default }
