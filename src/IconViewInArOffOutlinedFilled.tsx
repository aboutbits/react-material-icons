import React from 'react'
import { IconProps } from './types'

const IconViewInArOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m581-493 99-57v-45l-42-24-115 68 29 29 29 29ZM480-250l40-23v-167L368-592l-46-27-42 24v45l160 93v184l40 23Zm269-75L348-726l92-53q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 11-3 21t-8 19ZM440-181 240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l36-20 204 204 204 204-164 95q-19 11-40 11t-40-11ZM818-28l-52-52h-86v-80h14v8L146-700h14v20H80v-86l-54-54 57-57L875-85l-57 57Zm62-252v86l-80-80v-6h80ZM280-880v80h-6l-80-80h86Zm0 800H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm520-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80Z" />
  </svg>
)

export { IconViewInArOffOutlinedFilled as default }
