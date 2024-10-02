import React from 'react'
import { IconProps } from './types'

export const IconReportOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M363-120q-16 0-30.5-6.5T307-144L143-309q-11-11-17-25.5t-6-30.5v-232q0-16 6-30.5t17-25.5l25-25-84-86q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-86-86-24 25q-11 12-26 18.5t-32 6.5H363Zm117-160q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm283-30L520-553v-87q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v7L309-764q-11-12-10.5-28.5T310-820q10-10 22-15t26-5h239q16 0 30.5 6t25.5 17l164 164q11 11 17 25.5t6 30.5v236q0 14-5 27t-15 23q-11 12-28 12t-29-11Z" />
  </svg>
)
