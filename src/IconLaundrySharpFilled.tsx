import React from 'react'
import { IconProps } from './types.js'

export const IconLaundrySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-401v-120l-75 41L45-688l264-152h51q16 48 38 84t82 36q60 0 82-36t38-84h51l263 153-119 207-75-41v192l-63 55q-7 6-16 9.5t-18 3.5q-6 0-14-4t-16-10l-106-91q-32-28-72-41t-81-13q-24 0-47.5 4.5T240-401Zm-54 216-52-61 87-74q23-20 52.5-30.5T335-361q32 0 61 10.5t52 30.5l116 99q12 10 28.5 15.5T626-200q18 0 33.5-5t27.5-16l87-75 52 62-87 74q-23 20-52 30t-61 10q-32 0-61.5-10T512-160l-116-99q-12-10-27.5-15.5T335-280q-17 0-33.5 5.5T273-259l-87 74Z" />
  </svg>
)
