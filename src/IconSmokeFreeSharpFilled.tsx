import React from 'react'
import { IconProps } from './types.js'

export const IconSmokeFreeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 528-320H80v-120h328L56-792l56-56 736 736-56 56Zm-38-264-34-34v-86h60v120h-26Zm66 0v-120h60v120h-60Zm-140-74-46-46h46v46Zm40-86v-52q0-39-23-59.5T642-612h-62q-56 0-95-39t-39-95q0-56 39-95t95-39v60q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v66h-60Zm100 0v-90q0-66-46-114t-114-48v-60q30 0 52-22t22-52h60q0 29-11 52.5T754-770q56 26 91 80t35 120v90h-60Z" />
  </svg>
)