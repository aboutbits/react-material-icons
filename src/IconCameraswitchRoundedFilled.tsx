import React from 'react'
import { IconProps } from './types'

const IconCameraswitchRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280q-33 0-56.5-23.5T240-360v-240q0-33 23.5-56.5T320-680h40l28-28q6-6 13.5-9t15.5-3h126q8 0 15.5 3t13.5 9l28 28h40q33 0 56.5 23.5T720-600v240q0 33-23.5 56.5T640-280H320Zm160-120q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0 400Q304 0 171.5-110.5T7-389q-3-17 6.5-31T40-436q17-2 30 8.5T86-400q26 131 124.5 219T444-82l-34-34q-11-11-11-28t11-28q11-11 28-11t28 11L598-40q7 7 4.5 16T591-13q-27 7-54.5 10T480 0Zm0-960q176 0 308.5 110T953-571q3 17-6.5 31T920-524q-17 2-30-8.5T874-560q-26-131-124.5-219T516-878l34 34q11 11 11 28t-11 28q-11 11-28 11t-28-11L362-920q-7-7-4.5-16t11.5-11q27-7 54.5-10t56.5-3Z" />
  </svg>
)

export { IconCameraswitchRoundedFilled as default }
