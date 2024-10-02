import React from 'react'
import { IconProps } from './types'

export const IconFormatClearRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m528-546-93-93-26.5-26.5L382-692q-19-19-8.5-43.5T411-760h329q25 0 42.5 17.5T800-700q0 25-17.5 42.5T740-640H568l-40 94ZM764-84 460-388l-64 151q-7 17-22.5 27T340-200q-32 0-50-27t-5-57l83-196L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Z" />
  </svg>
)
