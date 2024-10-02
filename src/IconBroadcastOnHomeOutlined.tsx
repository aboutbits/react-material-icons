import React from 'react'
import { IconProps } from './types'

export const IconBroadcastOnHomeOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-649q-18-14-38-26t-42-21v-104H160v-80h640q33 0 56.5 23.5T880-800v151ZM120-240q-17 0-28.5-11.5T80-280v-360q0-17 11.5-28.5T120-680h200q17 0 28.5 11.5T360-640v360q0 17-11.5 28.5T320-240H120Zm530 80v-200q-9-8-14.5-18.5T630-400q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-400q0 11-4.5 22T710-360v200h-60Zm-83-127q-22-23-34.5-52T520-400q0-67 47-113.5T680-560q67 0 113.5 46.5T840-400q0 31-11.5 60T794-288l-43-42q14-14 21.5-32t7.5-38q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 20 8 38t22 32l-43 43Zm-71 71q-35-38-55.5-85.5T420-400q0-109 76-184.5T680-660q109 0 184.5 75.5T940-400q0 51-19 98.5T865-217l-43-43q29-29 43.5-65t14.5-75q0-84-58-142t-142-58q-83 0-141.5 58T480-400q0 39 15.5 75.5T539-259l-43 43ZM160-320h120v-280H160v280Zm0 0h120-120Z" />
  </svg>
)
