import React from 'react'
import { IconProps } from './types'

const IconHistoryOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-760q-25 0-54.5 6T373-737q-15 8-31 1t-24-21q-8-15-3-29.5t19-22.5q32-16 71.5-23.5T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 36-8 74.5T810-335q-7 14-22.5 19.5T758-318q-14-8-20-24t1-31q10-23 15.5-52t5.5-55q0-117-81.5-198.5T480-760Zm0 80q17 0 28.5 11.5T520-640v4q0 17-11.5 28.5T480-596q-17 0-28.5-11.5T440-636v-4q0-17 11.5-28.5T480-680Zm0 560q-69 0-130.5-24.5T240-212q-39-35-67.5-81.5T130-393q-5-16 5.5-30t27.5-16q17-2 30 8t18 27q11 39 33.5 74.5T297-268q37 32 84 50t99 18q37 0 70.5-8.5T614-234L288-560H160q-17 0-28.5-11.5T120-600v-128l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-92-92q-42 26-90 41t-102 15Z" />
  </svg>
)

export { IconHistoryOffRoundedFilled as default }
