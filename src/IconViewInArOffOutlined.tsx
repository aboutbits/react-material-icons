import React from 'react'
import { IconProps } from './types'

const IconViewInArOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M552-522Zm-72 42Zm269 155L348-726l92-53q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 11-3 21t-8 19ZM440-181 240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l36-20 204 204 204 204-164 95q-19 11-40 11t-40-11Zm83-370Zm-83 94Zm141-36Zm-61 53ZM406-668l117 117 115-68-158-91-74 42Zm34 395v-184l-160-93v185l160 92Zm240-121v-156l-99 57 99 99ZM520-273l106-61-106-106v167ZM818-28l-52-52h-86v-80h14v8L146-700h14v20H80v-86l-54-54 57-57L875-85l-57 57Zm62-252v86l-80-80v-6h80ZM280-880v80h-6l-80-80h86Zm0 800H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm520-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80Z" />
  </svg>
)

export { IconViewInArOffOutlined as default }