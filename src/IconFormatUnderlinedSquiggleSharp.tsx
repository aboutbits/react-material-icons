import React from 'react'
import { IconProps } from './types'

const IconFormatUnderlinedSquiggleSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M293-120q-15 0-31.5-6T233-140q-8-5-16-12.5t-17-7.5h-40v-80h40q15 0 31.5 6t28.5 14q8 5 16 12.5t17 7.5q10 0 18-7.5t16-12.5q12-9 28.5-14.5T387-240q15 0 31.5 5.5T447-220q8 5 15.5 12.5T480-200q10 0 18-7.5t16-12.5q12-9 28.5-14.5T574-240q14 0 31 6t29 14q8 5 16 12.5t18 7.5q10 0 17.5-7.5T701-220q12-8 28.5-14t31.5-6h40v80h-40q-10 0-18 7.5T727-140q-12 8-29 14t-32 6q-14 0-30.5-6T607-140q-8-5-16-12.5t-18-7.5q-10 0-18 7.5T539-140q-12 9-28.5 14.5T479-120q-15 0-31.5-5.5T419-140q-8-5-15.5-12.5T386-160q-9 0-17.5 7.5T352-140q-11 9-28 14.5t-31 5.5Zm187-180q-101 0-170.5-69.5T240-540v-320h100v320q0 59 40.5 99.5T480-400q59 0 99.5-40.5T620-540v-320h100v320q0 101-69.5 170.5T480-300Z" />
  </svg>
)

export { IconFormatUnderlinedSquiggleSharp as default }
