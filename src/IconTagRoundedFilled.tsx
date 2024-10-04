import React from 'react'
import { IconProps } from './types.js'

export const IconTagRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-320-33 131q-3 13-13 21t-24 8q-19 0-31-15t-7-33l28-112H171q-20 0-32-15.5t-7-34.5q3-14 14-22t25-8h129l40-160H231q-20 0-32-15.5t-7-34.5q3-14 14-22t25-8h129l33-131q3-13 13-21t24-8q19 0 31 15t7 33l-28 112h160l33-131q3-13 13-21t24-8q19 0 31 15t7 33l-28 112h109q20 0 32 15.5t7 34.5q-3 14-14 22t-25 8H660l-40 160h109q20 0 32 15.5t7 34.5q-3 14-14 22t-25 8H600l-33 131q-3 13-13 21t-24 8q-19 0-31-15t-7-33l28-112H360Zm20-80h160l40-160H420l-40 160Z" />
  </svg>
)