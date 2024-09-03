import React from 'react'
import { IconProps } from './types'

const IconLocalDiningRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M479-422 203-148q-11 11-27.5 11.5T147-148q-11-11-11-28t11-28l382-382q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 276 276q11 11 11.5 27.5T811-148q-11 11-28 11t-28-11L479-422Zm-186-40L173-582q-42-42-53-106t25-114q11-15 29.5-17t31.5 12l215 217-128 128Z" />
  </svg>
)

export { IconLocalDiningRoundedFilled as default }
