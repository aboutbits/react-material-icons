import React from 'react'
import { IconProps } from './types'

const IconOxygenSaturationOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-400h80v160q0 17 11.5 28.5T160-200h91q11-19 29.5-29.5T320-240h40v-40q0-17 11.5-28.5T400-320q17 0 28.5 11.5T440-280v40h80v-40q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v40h40q21 0 39.5 10.5T709-200h91q17 0 28.5-11.5T840-240v-160h80v160q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640-80H320q-21 0-39.5-10.5T251-120h-91q-50 0-85-35t-35-85v-160Zm280-520h80v160q0 33-23.5 56.5T320-680h-40q-33 0-56.5 23.5T200-600q0 33 23.5 56.5T280-520v80q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-160Zm240 0h80v160h40q66 0 113 47t47 113q0 66-47 113t-113 47v-80q33 0 56.5-23.5T760-600q0-33-23.5-56.5T680-680h-40q-33 0-56.5-23.5T560-760v-160Zm-80 480Zm-11 40q-44 0-79.5-25.5T340-493q-5-12-15-19.5t-23-7.5h-22v-80h22q39 0 70.5 22.5T416-518q5 17 20 27.5t33 10.5h22q18 0 33-10.5t20-27.5q12-37 43.5-59.5T658-600h22v80h-22q-13 0-23.5 7.5T620-493q-14 42-49.5 67.5T491-400h-22Z" />
  </svg>
)

export { IconOxygenSaturationOutlined as default }