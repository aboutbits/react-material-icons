import React from 'react'
import { IconProps } from './types'

const IconRespiratoryRateOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m574-256 66-67v-37 37l-66 67Zm212 0-66-67v-37 37l66 67ZM480-480ZM80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220h-80v-220H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h220v80H160Zm120-120q-11 0-21-5.5T244-302l-69-138H80v-80h120q11 0 21 5.5t15 16.5l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l79 159q-21 2-39.5 9T481-470l-41-80-124 248q-5 11-15 16.5t-21 5.5ZM500-40q-25 0-42.5-17.5T440-100v-147l53-141q9-23 29.5-37.5T568-440h72v-80h80v80h72q25 0 45.5 14.5T867-388l53 141v147q0 25-17.5 42.5T860-40h-80q-25 0-42.5-17.5T720-100v-60h80v40h40v-113l-48-127h-72v37l66 67-56 56-50-50-50 50-56-56 66-67v-37h-72l-48 127v113h40v-40h80v60q0 25-17.5 42.5T580-40h-80Zm180-200Z" />
  </svg>
)

export { IconRespiratoryRateOutlined as default }