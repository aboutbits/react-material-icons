import React from 'react'
import { IconProps } from './types'

const IconMenstrualHealthRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-300q0-25 22-36t42 4l178 133q26-37 56.5-78t68.5-87q13-16 33-16t33 16q38 46 68.5 86.5T638-679l178-133q20-15 42-4t22 36v300q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM200-360q0-57 18.5-117.5T279-610l-119-90v220q0 44 11.5 84.5T203-320q-2-10-2.5-19.5T200-360Zm280 200q83 0 141.5-58.5T680-360q0-66-45-167T480-760Q370-626 325-526t-45 166q0 83 58.5 141.5T480-160Zm280-200q0 11-.5 20.5T757-320q20-35 31.5-75.5T800-480v-220l-119 89q42 72 60.5 132.5T760-360Z" />
  </svg>
)

export { IconMenstrualHealthRounded as default }