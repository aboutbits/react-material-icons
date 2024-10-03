import React from 'react'
import { IconProps } from './types.js'

export const IconCardiologyRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m428-451-34-51q-5-8-14-13t-19-5H124q-11 0-20-6.5T91-544q-6-19-8.5-37.5T80-620q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 20-2.5 38.5T869-544q-3 11-12.5 17.5T836-520H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162Zm52 318q-14 0-28-5t-25-16q-94-84-159-147.5T163-416q-6-8-1.5-16t13.5-8h162l69 102q6 9 15.5 13.5T442-320q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h185q9 0 13.5 8t-1.5 16q-40 51-105 114.5T533-154q-11 11-25 16t-28 5Z" />
  </svg>
)
