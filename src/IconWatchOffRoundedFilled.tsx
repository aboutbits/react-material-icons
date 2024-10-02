import React from 'react'
import { IconProps } from './types'

export const IconWatchOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M764-85 638-210l-22 73q-8 26-29 41.5T540-80H419q-26 0-47-15.5T343-137l-23-77q-6-20-18.5-40T269-296q-34-37-51.5-84.5T200-480q0-36 9-69.5t26-63.5L84-764q-12-12-12-28.5T84-821q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T764-85ZM480-280q20 0 38-3.5t35-10.5L294-553q-7 17-10.5 35t-3.5 38q0 83 58.5 141.5T480-280Zm159-465q6 20 18.5 40t32.5 42q34 37 52 84.5t18 98.5q0 23-2.5 40.5T750-406q-5 16-19.5 23t-31.5 1q-15-5-22-20t-2-32q3-9 4-19t1-27q0-42-16-78t-43-63q-38-38-88.5-52T431-674q-11 3-21.5.5T391-684l-52-52q-8-8-10.5-18.5t.5-21.5l14-46q8-26 29-42t47-16h121q26 0 47 16t29 42l23 77Z" />
  </svg>
)
