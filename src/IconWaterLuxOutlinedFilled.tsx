import React from 'react'
import { IconProps } from './types'

const IconWaterLuxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-760v-80h120v80H120Zm125 213-57-56 85-85 57 56-85 85Zm235-93q-83 0-141.5-58.5T280-840h400q0 83-58.5 141.5T480-640Zm-40 160v-120h80v120h-80Zm275-67-84-85 56-56 85 84-57 57Zm5-213v-80h120v80H720ZM80-120v-80q38 0 56.5-20t77.5-20q59 0 77.5 20t54.5 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20q38 0 55.5-20t76.5-20q59 0 77.5 20t56.5 20v80q-57 0-77.5-20T746-160q-36 0-54.5 20T614-120q-57 0-77.5-20T480-160q-38 0-56.5 20T346-120q-59 0-76.5-20T214-160q-38 0-56.5 20T80-120Zm0-160v-80q38 0 56.5-20t77.5-20q57 0 76.5 20t55.5 20q38 0 56.5-20t77.5-20q57 0 77 20t55 20q38 0 56.5-20t77.5-20q57 0 77.5 20t56.5 20v80q-59 0-78.5-20T746-320q-36 0-54.5 20T614-280q-57 0-77.5-20T480-320q-38 0-55.5 20T348-280q-59 0-78.5-20T214-320q-36 0-56.5 20T80-280Z" />
  </svg>
)

export { IconWaterLuxOutlinedFilled as default }
