import React from 'react'
import { IconProps } from './types'

export const IconStockMediaRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-360q-33 0-56.5-23.5T80-440v-360q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v360q0 33-23.5 56.5T520-360H160Zm0-80h360v-360H160v360Zm160-70-40-55q-3-4-8-4t-8 4l-52 69q-4 5-1 10.5t9 5.5h240q6 0 9-5.5t-1-10.5l-72-94q-3-4-8-4t-8 4l-60 80ZM680-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-167q0-17 11.5-28.5T760-520h80q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v240q0 50-35 85t-85 35ZM160-440v-360 360Z" />
  </svg>
)
