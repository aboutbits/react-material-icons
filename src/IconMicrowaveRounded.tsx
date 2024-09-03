import React from 'react'
import { IconProps } from './types'

const IconMicrowaveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M410-520q-20 0-37.5-7.5T338-546q-7-5-13.5-9.5T310-560q-11 0-19 5.5T276-541q-6 8-14 12.5t-18 4.5q-17 0-28.5-11.5T204-564q0-8 3-15.5t8-12.5q19-21 43-34.5t52-13.5q20 0 37.5 8t34.5 19q7 5 13.5 9t14.5 4q18 0 38-24 6-6 13-9t15-3q17 0 28.5 11.5T516-596q0 8-3 15.5t-8 12.5q-19 21-43 34.5T410-520Zm0 200q-20 0-37.5-7.5T338-346q-7-5-13.5-9.5T310-360q-11 0-19 5.5T276-341q-6 8-14 12.5t-18 4.5q-17 0-28.5-11.5T204-364q0-8 3-15.5t8-12.5q19-21 43-34.5t52-13.5q20 0 37.5 8t34.5 19q7 5 13.5 9t14.5 4q12 0 21-8t17-16q6-6 13-9t15-3q17 0 28.5 11.5T516-396q0 8-3 15.5t-8 12.5q-19 21-43 34.5T410-320ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h400v-480H160v480Zm480 0h160v-480H640v480Zm60-360h40q8 0 14-6t6-14v-40q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v40q0 8 6 14t14 6Zm20 160q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520q-17 0-28.5 11.5T680-480q0 17 11.5 28.5T720-440Zm0 160q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-80 40v-480 480Z" />
  </svg>
)

export { IconMicrowaveRounded as default }
