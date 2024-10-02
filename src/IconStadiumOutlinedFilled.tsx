import React from 'react'
import { IconProps } from './types'

export const IconStadiumOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80ZM360-85q-52-5-102-15t-89.5-24.5Q129-139 104.5-158T80-200v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-24.5 42t-64 33.5Q752-110 702-100T600-85v-195H360v195Zm120-435q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520Z" />
  </svg>
)
