import React from 'react'
import { IconProps } from './types'

const IconResumeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240q-17 0-28.5-11.5T240-280Zm221 4q-20 12-40.5 0T400-311v-338q0-23 20.5-35t40.5 0l282 170q20 12 20 34t-20 34L461-276Z" />
  </svg>
)

export { IconResumeRoundedFilled as default }
