import React from 'react'
import { IconProps } from './types.js'

export const IconSmokeFreeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-320q-25 0-42.5-17.5T80-380q0-25 17.5-42.5T140-440h268L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L528-320H140Zm610-120q13 0 21.5 8.5T780-410v60q0 14-7.5 22t-18.5 8l-34-34v-56q0-13 8.5-21.5T750-440Zm100 0q13 0 21.5 8.5T880-410v60q0 13-8.5 21.5T850-320q-13 0-21.5-8.5T820-350v-60q0-13 8.5-21.5T850-440Zm-216 0h16q13 0 21.5 8.5T680-410v16l-46-46Zm116-40q-13 0-21.5-8.5T720-510v-22q0-39-23-59.5T642-612h-62q-56 0-95-39t-39-95q0-56 39-95t95-39q13 0 21.5 8.5T610-850q0 13-8.5 21.5T580-820q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v36q0 13-8.5 21.5T750-480Zm100 0q-13 0-21.5-8.5T820-510v-60q0-66-46-114t-114-48q-13 0-21.5-8.5T630-762q0-13 8.5-21.5T660-792q30 0 52-22t22-52q0-13 8.5-21.5T764-896q13 0 21.5 8.5T794-866q0 29-11 52.5T754-770q56 26 91 80t35 120v60q0 13-8.5 21.5T850-480Z" />
  </svg>
)
