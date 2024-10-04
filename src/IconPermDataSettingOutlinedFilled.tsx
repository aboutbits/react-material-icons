import React from 'react'
import { IconProps } from './types'

const IconPermDataSettingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-160q33 0 56.5-23.5T840-240q0-33-23.5-56.5T760-320q-33 0-56.5 23.5T680-240q0 33 23.5 56.5T760-160ZM720-40l-12-60q-12-5-22.5-10.5T664-124l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T708-380l12-60h80l12 60q12 5 22.5 10.5T856-356l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T812-100l-12 60h-80ZM80-80l800-800v386q-26-13-58.5-19.5T760-520q-117 0-199 81.5T479-240q0 45 12 84t37 76H80Z" />
  </svg>
)

export { IconPermDataSettingOutlinedFilled as default }
