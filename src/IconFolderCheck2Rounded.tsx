import React from 'react'
import { IconProps } from './types.js'

export const IconFolderCheck2Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-480 212-12 280Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v111q0 17-11.5 28.5T840-489q-17 0-28.5-11.5T800-529v-111H480q-16 0-30.5-6T424-663l-57-57H160v480h246q17 0 28.5 11.5T446-200q0 17-11.5 28.5T406-160H160Zm531-75-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32q12 12 28 12t28-12l90-89q9-9 9-21.5t-9-21.5q-9-9-21-8.5t-21 8.5l-76 75Zm29-205q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Z" />
  </svg>
)