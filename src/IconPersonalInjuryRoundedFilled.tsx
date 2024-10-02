import React from 'react'
import { IconProps } from './types'

export const IconPersonalInjuryRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-90 400q-13 0-21.5-8.5T360-190q0-13 8.5-21.5T390-220h44q11 0 17 9.5t1 19.5l-4 8q-5 11-14.5 17t-21.5 6h-22ZM224-458q60-30 124.5-46T480-520q23 0 46 2t46 6q11 2 16 11.5t0 19.5l-75 158q-5 11-14.5 17t-21.5 6h-87q-46 0-78 32t-32 78q0 26 11 48.5t30 38.5q8 6 6 14.5T317-80H200q-17 0-28.5-11.5T160-120v-231q0-34 16.5-62.5T224-458Zm576 298q0 33-23.5 56.5T720-80h-2q-17 0-28.5-11.5T678-120v-332q0-11 8.5-17.5T706-471q8 3 15 6.5t15 6.5q30 16 47 44.5t17 62.5v191Z" />
  </svg>
)
