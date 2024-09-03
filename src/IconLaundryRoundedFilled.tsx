import React from 'react'
import { IconProps } from './types'

const IconLaundryRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-215q-11-13-9.5-29.5T165-272l56-48q24-20 53-30.5t61-10.5q31 0 60 10.5t53 30.5l116 99q13 11 29 16t33 5q17 0 32.5-5t28.5-16l56-48q13-11 29.5-10t27.5 14q11 13 9.5 29.5T795-208l-56 48q-24 20-53 30t-60 10q-32 0-61.5-10T512-160l-116-99q-13-11-28.5-16t-32.5-5q-17 0-33 5t-29 16l-57 48q-13 11-29 10t-27-14Zm80-186v-120l-41 22q-14 8-30 3.5T145-514L65-653q-8-14-3.5-30.5T80-708l199-115q12-7 25-12t27-5q14 0 24 8.5t15 21.5q13 38 42 64t68 26q39 0 67.5-26t42.5-64q5-13 15.5-21.5T630-840q14 0 26.5 5t24.5 12l199 115q14 8 18 24t-4 30l-79 140q-8 14-24 18.5t-30-3.5l-41-22v192l-63 55q-8 6-16.5 9.5T623-261q-8 0-15.5-4.5T593-275l-106-91q-32-27-71.5-41T334-421q-24 0-47.5 5T240-401Z" />
  </svg>
)

export { IconLaundryRoundedFilled as default }
