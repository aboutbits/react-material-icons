import React from 'react'
import { IconProps } from './types'

const IconIframeOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v114L54-792q-12-12-11.5-28.5T55-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57L686-160H160Zm0-80h446L206-640h-46v400Zm720-480v440q0 20-12.5 30T840-240q-15 0-27.5-10.5T800-281v-359H467q-16 0-30.5-6T411-663l-69-69q-9-10-11-21t3-22q5-11 14-18t23-7h429q33 0 56.5 23.5T880-720ZM720-520v69q0 27-24.5 37.5T652-422l-70-70q-19-19-8.5-43.5T611-560h69q17 0 28.5 11.5T720-520Z" />
  </svg>
)

export { IconIframeOffRoundedFilled as default }
