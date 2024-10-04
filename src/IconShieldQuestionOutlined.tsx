import React from 'react'
import { IconProps } from './types'

const IconShieldQuestionOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Zm0 200q17 0 29.5-12.5T522-322q0-17-12.5-29.5T480-364q-17 0-29.5 12.5T438-322q0 17 12.5 29.5T480-280Zm-29-128h60v-22q0-11 5-21 6-14 16-23.5t21-19.5q17-17 29.5-38t12.5-46q0-45-34.5-73.5T480-680q-40 0-71.5 23T366-596l54 22q6-20 22.5-34t37.5-14q22 0 38.5 13t16.5 33q0 17-10.5 31.5T501-518q-12 11-24 22.5T458-469q-7 14-7 29.5v31.5Z" />
  </svg>
)

export { IconShieldQuestionOutlined as default }
