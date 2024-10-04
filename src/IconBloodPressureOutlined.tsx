import React from 'react'
import { IconProps } from './types.js'

export const IconBloodPressureOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220h-80v-220H160v120H80Zm200 320q-11 0-21-5.5T244-302l-69-138H80v-80h120q11 0 21 5.5t15 16.5l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l67 134q-18 11-34.5 23T478-474l-38-76-124 248q-5 11-15 16.5t-21 5.5Zm147 120H160q-33 0-56.5-23.5T80-240v-120h80v120h243q3 21 9 41t15 39Zm53-320ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm8-180 91-91-28-28-91 91 28 28Z" />
  </svg>
)
