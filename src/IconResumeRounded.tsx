import React from 'react'
import { IconProps } from './types'

const IconResumeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240q-17 0-28.5-11.5T240-280Zm221 4 282-170q10-6 14.5-15t4.5-19q0-10-4.5-19T743-514L461-684q-5-3-10.5-4t-10.5-1q-16 0-28 11.5T400-649v338q0 17 12 28.5t28 11.5q5 0 10.5-1t10.5-4Zm19-105v-198l165 99-165 99Zm0-99Z" />
  </svg>
)

export { IconResumeRounded as default }