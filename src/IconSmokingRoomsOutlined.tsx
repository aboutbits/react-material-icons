import React from 'react'
import { IconProps } from './types'

export const IconSmokingRoomsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-120h600v120H80Zm640 0v-120h60v120h-60Zm100 0v-120h60v120h-60ZM720-360v-52q0-39-23-59.5T642-492h-62q-56 0-95-39t-39-95q0-56 39-95t95-39v60q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v66h-60Zm100 0v-90q0-66-46-114t-114-48v-60q30 0 52-22t22-52q0-30-22-52t-52-22v-60q56 0 95 39t39 95q0 29-11 52.5T754-650q56 26 91 80t35 120v90h-60Z" />
  </svg>
)
