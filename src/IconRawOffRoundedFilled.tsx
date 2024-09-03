import React from 'react'
import { IconProps } from './types'

const IconRawOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M764-84 84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm-54-398-24 94-98-96-19-80q-3-14 5.5-25t22.5-11q10 0 18.5 6t10.5 16l24 98 25-98q2-10 10-16t18-6h14q10 0 18.5 6t10.5 16l24 98 25-98q2-10 10-16t18-6q14 0 23 11t5 25l-46 182q-2 10-10 16t-18 6h-14q-10 0-18-6t-10-16l-25-100Zm-351 86 33-132 48 48 60 60h-74l-10 38q-2 10-10 16t-19 6q-14 0-23-11t-5-25Zm-239 6v-180q0-13 8.5-21.5T150-600h110q24 0 42 18t18 42v40q0 18-9.5 32.5T284-444l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44v50q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390Zm60-110h80v-40h-80v40Z" />
  </svg>
)

export { IconRawOffRoundedFilled as default }
