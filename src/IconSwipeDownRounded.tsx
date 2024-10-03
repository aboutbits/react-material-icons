import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeDownRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M152-472q-6-27-9-54t-3-54q0-74 22-144t64-130q8-11 20-12.5t21 7.5q9 9 10 22.5t-7 24.5q-35 52-52.5 110.5T200-580q0 26 3 51.5t10 50.5l44-43q9-8 21-8.5t21 8.5q9 9 9 21t-9 21l-91 91q-12 12-28 12t-28-12l-91-91q-9-9-9-21t9-21q9-9 21-9t21 9l49 49Zm506 345q-23 8-46.5 7.5T566-131L340-236q-15-7-21-22.5t1-30.5l2-4q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l130 357q7 19-4 35.5T516-268l-47 3 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57ZM538-594q16-6 30.5 1t20.5 23l41 112q6 16-1 31t-23 21q-16 6-31-1t-21-23l-40-113q-6-16 1-30.5t23-20.5Zm126-3q16-6 30.5 1t20.5 23l27 75q6 16-.5 30.5T719-447q-16 6-31-1t-21-23l-27-75q-6-16 1-30.5t23-20.5Zm15 242Z" />
  </svg>
)
