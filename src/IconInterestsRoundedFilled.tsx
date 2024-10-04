import React from 'react'
import { IconProps } from './types.js'

export const IconInterestsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m113-579 132-238q6-11 15-16t20-5q11 0 20 5t15 16l132 238q5 10 4.5 20t-5.5 19q-5 9-14 14.5t-20 5.5H148q-11 0-20-5.5T114-540q-5-9-5.5-19t4.5-20Zm167 459q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240-40v-240q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v240q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm134-382-53-45q-69-58-95-91.5T480-753q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 41-26 74.5T759-587l-53 45q-11 10-26 10t-26-10Z" />
  </svg>
)