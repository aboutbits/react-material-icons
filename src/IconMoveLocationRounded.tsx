import React from 'react'
import { IconProps } from './types'

export const IconMoveLocationRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M777-240H650q-17 0-28.5-11.5T610-280q0-17 11.5-28.5T650-320h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L798-148q-11 11-27.5 11.5T742-148q-11-11-11-28t11-28l35-36ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0 67ZM80-552q0-150 96.5-239T400-880q72 0 129.5 25t99 69Q670-742 693-682.5T719-554q1 17-10.5 28.5T680-514q-17 0-28.5-11.5T639-554q-5-101-72.5-173.5T400-800q-101 0-170.5 69.5T160-552q0 71 59 162.5T400-186q14-12 26.5-24t23.5-24q12-12 28.5-12t28.5 11q12 11 12.5 27.5T508-179q-16 17-30.5 30.5T453-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-40-37-87-86t-87-104.5Q133-373 106.5-433T80-552Zm320 192q42 0 79.5-17t66.5-48q5-5 7-11.5t2-13.5q0-11-4.5-20.5T536-485q-31-18-65.5-26.5T400-520q-36 0-70.5 8.5T264-485q-9 5-14 14t-5 20q0 8 2 14.5t7 11.5q29 31 66.5 48t79.5 17Z" />
  </svg>
)
