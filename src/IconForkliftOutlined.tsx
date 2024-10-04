import React from 'react'
import { IconProps } from './types.js'

export const IconForkliftOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-50 0-85-35t-35-85q0-26 10-49.5T80-330v-190h80v-240h320l188 443q6 14 9 28t3 29q0 58-41 99t-99 41q-41 0-75.5-21.5T413-200H273q-13 36-44 58t-69 22Zm560-40v-640h80v560h120v80H720Zm-560-40q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm380 0q25 0 42.5-17.5T600-260q0-25-17.5-42.5T540-320q-25 0-42.5 17.5T480-260q0 25 17.5 42.5T540-200Zm-267-80h128q2-11 4.5-20.5T413-320h-90L206-440h-46v80q38 0 69 22t44 58Zm84-120h189L427-680H240v160l117 120Zm-34 80-18.5-19q-18.5-19-40-41.5t-40-41L206-440h-46 46l117 120h90-90Z" />
  </svg>
)
