import React from 'react'
import { IconProps } from './types'

export const IconSettingsTimelapseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-346v231q0 14-10.5 24.5T405-80q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-75 57q1 5 1 12.5v15.5q0 17-12 28t-29 11H616q3-10 4.5-19.5T622-480q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 48 27.5 84t70.5 50Zm310 4 142 85q10 6 10 17t-10 17l-142 85q-10 6-20 .5T720-155v-170q0-12 10-17.5t20 .5Zm-200 0 142 85q10 6 10 17t-10 17l-142 85q-10 6-20 .5T520-155v-170q0-12 10-17.5t20 .5Z" />
  </svg>
)
