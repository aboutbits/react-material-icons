import React from 'react'
import { IconProps } from './types'

export const IconSleepScoreRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-600q-17 0-28.5-11.5T796-640q-5-28-18-52t-32-44l-55 93q-10 16-21.5 35T645-575q-14 15-35 15t-36-14q-15-14-15-35t15-36q14-14 33.5-25t35.5-21l93-55q-21-20-47-33t-56-18q-15-2-24-14.5t-9-28.5q0-17 11-28.5t26-9.5q92 12 158 76.5T876-645q3 17-8 31t-28 14ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-124 68.5-225T331-857q14-5 29-3.5t25 9.5q8 7 12.5 19.5T402-799q2 79 32 150.5T520-521q56 56 128 86t151 32q21 0 32 3.5t18 11.5q8 10 10.5 26t-2.5 29q-46 115-148 184T483-80Z" />
  </svg>
)
