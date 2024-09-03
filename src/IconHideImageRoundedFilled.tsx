import React from 'react'
import { IconProps } from './types'

const IconHideImageRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-760v429q0 14-7 23t-18 14q-11 5-22 3.5T772-302L302-772q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h429q33 0 56.5 23.5T840-760ZM200-120q-33 0-56.5-23.5T120-200v-528l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36H200Zm367-160-84-84-33 44-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h287Z" />
  </svg>
)

export { IconHideImageRoundedFilled as default }
