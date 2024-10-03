import React from 'react'
import { IconProps } from './types.js'

export const IconFolderCheck2RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v107q0 21-18 31.5t-38 1.5q-25-10-51.5-15t-52.5-5q-63 0-117.5 26T510-424.5Q472-381 453-324t-11 119q2 18-9 31.5T405-160H160ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-57-138q12 12 28 12t28-12l90-89q9-9 9-21.5t-9-21.5q-9-9-21-8.5t-21 8.5l-76 75-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32Z" />
  </svg>
)
