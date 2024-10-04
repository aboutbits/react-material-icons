import React from 'react'
import { IconProps } from './types'

const IconHouseboatOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-80q38 0 56-20t77-20q58 0 78 20t55 20q38 0 56.5-20t77.5-20q59 0 77.5 20t56.5 20q35 0 55-20t78-20q59 0 77 20t56 20v80q-57 0-78-20t-56-20q-36 0-56 20t-77 20q-59 0-77-20t-56-20q-38 0-56 20t-77 20q-57 0-77-20t-56-20q-35 0-56 20t-78 20Zm150-160q-24 0-46-9t-39-26l-55-55 56-56 55 54q6 6 13.5 9t15.5 3h50v-135l-53 39-47-64 300-220 300 220-47 65-53-39v134h50q8 0 15.5-3t13.5-9l55-54 56 56-55 55q-17 17-39 26t-46 9H230Zm210-80h80v-80h-80v80Z" />
  </svg>
)

export { IconHouseboatOutlinedFilled as default }
