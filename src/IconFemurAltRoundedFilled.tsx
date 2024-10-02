import React from 'react'
import { IconProps } from './types'

export const IconFemurAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M540-440q17 0 28.5-11.5T580-480q0-6-6-23 11-4 18.5-14t7.5-23q0-17-11.5-28.5T560-580q-13 0-23 7t-14 19l-146-70q1-3 3-16 0-17-11.5-28.5T340-680q-17 0-28.5 11.5T300-640q0 6 7 22-11 4-19 14t-8 24q0 17 11.5 28.5T320-540q14 0 24-7.5t14-19.5l146 70-4 17q0 17 11.5 28.5T540-440Zm181-194q19 29 29 62t10 69v363q0 25-17.5 42.5T700-80H430q-17 0-29.5-9.5T383-115q-24-84-23.5-158.5T364-391q-1 0 0 0-37-8-92.5-26T159-471q-17-11-20-31.5t9-37.5l185-259q13-17 33.5-23t40.5 3l212 97q32 14 57.5 36.5T721-634Z" />
  </svg>
)
