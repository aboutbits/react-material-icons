import React from 'react'
import { IconProps } from './types'

const IconOxygenSaturationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-440q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-160h320v160h40q66 0 113 47t47 113q0 66-47 113t-113 47h-93q11-11 19.5-24.5T620-493q4-12 14.5-19.5T658-520h22v-80h-22q-39 0-70.5 22.5T544-518q-5 17-20 27.5T491-480h-22q-18 0-33-10.5T416-518q-12-37-43.5-59.5T302-600h-22v80h22q13 0 23 7.5t15 19.5q5 15 13.5 28.5T373-440h-93Zm40 360q-21 0-39.5-10.5T251-120h-91q-50 0-85-35t-35-85v-160h80v160q0 17 11.5 28.5T160-200h91q11-19 29.5-29.5T320-240h40v-40q0-17 11.5-28.5T400-320q17 0 28.5 11.5T440-280v40h80v-40q0-17 11.5-28.5T560-320q17 0 28.5 11.5T600-280v40h40q21 0 39.5 10.5T709-200h91q17 0 28.5-11.5T840-240v-160h80v160q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640-80H320Z" />
  </svg>
)

export { IconOxygenSaturationOutlinedFilled as default }
