import React from 'react'
import { IconProps } from './types'

const IconInboxCustomizeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-240h253q7 22 16 42t22 38H120v-720h720v306q-19-9-39-14.5t-41-8.5v-203H200v360h168q9 27 30 47t47 28q-3 20-4 40.5t2 40.5q-36-7-67.5-26.5T320-360H200v120Zm0 0h253-253Zm481 120-12-60q-12-5-22.5-10.5T625-204l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T669-460l12-60h80l12 60q12 5 22.5 10.5T817-436l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T773-180l-12 60h-80Zm40-120q33 0 56.5-23.5T801-320q0-33-23.5-56.5T721-400q-33 0-56.5 23.5T641-320q0 33 23.5 56.5T721-240Z" />
  </svg>
)

export { IconInboxCustomizeSharp as default }