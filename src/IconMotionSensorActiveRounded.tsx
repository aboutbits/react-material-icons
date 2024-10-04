import React from 'react'
import { IconProps } from './types'

const IconMotionSensorActiveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160ZM80-680v-120q0-33 23.5-56.5T160-880h120q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800H160v120q0 17-11.5 28.5T120-640q-17 0-28.5-11.5T80-680Zm400 280q-33 0-56.5-23.5T400-480q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T480-400ZM800-80H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-120q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280v120q0 33-23.5 56.5T800-80Zm0-600v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680ZM247-440q-18 0-28 15.5t-5 33.5q19 63 66 109t110 67q18 6 33.5-5.5T439-251q0-14-9-25.5T407-293q-39-15-69.5-44T293-406q-5-15-17.5-24.5T247-440Zm1-80q-18 0-28-15.5t-5-33.5q19-63 66.5-109T392-745q18-6 33 5.5t15 30.5q0 14-9 25.5T408-667q-39 15-69.5 44T294-554q-5 15-17.5 24.5T248-520Zm466 80q18 0 28 15.5t5 33.5q-19 63-66.5 109T570-215q-18 6-33-5.5T522-251q0-14 8.5-25.5T553-293q39-15 70-44t45-69q5-15 17.5-24.5T714-440Zm0-80q18 0 28-15.5t5-33.5q-19-63-66.5-109T570-745q-18-6-33 5.5T522-709q0 14 9 25.5t23 16.5q39 15 69.5 44t44.5 69q5 15 17.5 24.5T714-520Z" />
  </svg>
)

export { IconMotionSensorActiveRounded as default }
