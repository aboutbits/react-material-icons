import React from 'react'
import { IconProps } from './types'

const IconAdOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-527l-37-37q-11-11-11-27.5T84-820q11-11 28-11t28 11l680 680q12 12 11.5 28T819-84q-12 11-28 11.5T763-84l-36-36H200Zm0-80h447L200-647v447Zm600-80q-15 0-27.5-10.5T760-321v-319H466q-16 0-30.5-6T410-663L301-772q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h430q33 0 56.5 23.5T840-760v440q0 20-12.5 30T800-280Z" />
  </svg>
)

export { IconAdOffRounded as default }
