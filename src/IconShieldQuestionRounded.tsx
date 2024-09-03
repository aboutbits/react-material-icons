import React from 'react'
import { IconProps } from './types'

const IconShieldQuestionRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Zm0 200q17 0 29.5-12.5T522-322q0-17-12.5-29.5T480-364q-17 0-29.5 12.5T438-322q0 17 12.5 29.5T480-280Zm1-124q12 0 21.5-9t9.5-21q1-7 3-13.5t6-12.5q7-10 15.5-18t16.5-16q17-17 29.5-38t12.5-46q0-45-34.5-73.5T480-680q-32 0-59 15t-43 42q-6 11-1.5 22t16.5 16q11 5 22-.5t19-14.5q9-11 20.5-16.5T480-622q22 0 38.5 13t16.5 33q0 17-10.5 31.5T501-518q-11 11-22 21.5T460-473q-5 8-7 18t-2 20q0 13 8.5 22t21.5 9Z" />
  </svg>
)

export { IconShieldQuestionRounded as default }