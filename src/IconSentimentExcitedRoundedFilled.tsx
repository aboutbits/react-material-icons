import React from 'react'
import { IconProps } from './types'

const IconSentimentExcitedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240q66 0 113-47t47-113v-40q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440v40q0 66 47 113t113 47Zm0-60q-42 0-71-29t-29-71v-20h200v20q0 42-29 71t-71 29ZM340-680q-34 0-60 22t-40 54q-5 11 1.5 21t18.5 13q11 3 22-2.5t16-16.5q7-13 17.5-22t24.5-9q14 0 24.5 9.5T382-588q5 11 16 16t22 2q12-3 18.5-13t1.5-21q-14-32-40-54t-60-22Zm280 0q-34 0-60 22t-40 54q-5 11 1.5 21t18.5 13q11 3 22-2.5t16-16.5q7-13 17.5-22t24.5-9q14 0 24.5 9.5T662-588q5 11 16 16t22 2q12-3 18.5-13t1.5-21q-14-32-40-54t-60-22ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconSentimentExcitedRoundedFilled as default }
