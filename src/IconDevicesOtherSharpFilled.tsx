import React from 'react'
import { IconProps } from './types.js'

export const IconDevicesOtherSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160H80v-640h720v80H160v480h120v80Zm160-100q25 0 42.5-17.5T500-320q0-25-17.5-42.5T440-380q-25 0-42.5 17.5T380-320q0 25 17.5 42.5T440-260Zm440 100H600v-440h280v440Zm-520 0v-71q-19-17-29.5-40T320-320q0-26 10.5-49t29.5-40v-71h160v71q19 17 29.5 40t10.5 49q0 26-10.5 49T520-231v71H360Z" />
  </svg>
)
