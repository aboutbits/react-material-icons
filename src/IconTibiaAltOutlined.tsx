import React from 'react'
import { IconProps } from './types'

const IconTibiaAltOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M394-80q-16-47-24-92.5t-10-86q-2-40.5-.5-74.5t4.5-58q-1 0 0 0-22-5-50.5-12.5t-61-20.5Q220-437 186-455.5T119-500l50-70q39 35 81.5 55.5t78.5 32q36 11.5 60 15l24 3.5q18 1 28.5 15t7.5 32l-4.5 33.5q-4.5 33.5-5 83.5t7.5 109q8 59 33 111h-86Zm366 0h-80v-423q0-48-25.5-87T586-649L313-772l49-67 257 117q64 29 102.5 88T760-503v423ZM540-201q9 0 17-4t13-10q6 6 14 10t16 4q17 0 28.5-11.5T640-241q0-17-11.5-28.5T600-281v-159q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-8 0-16 3.5t-14 9.5q-5-6-13-9.5t-17-3.5q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440v159q-17 0-28.5 11.5T500-241q0 17 11.5 28.5T540-201ZM480-80q-25-52-33-111t-7.5-109q.5-50 5-83.5L449-417q3-18-7.5-32T413-464l-24-3.5q-24-3.5-60-15t-78.5-32Q208-535 169-570q39 35 81.5 55.5t78.5 32q36 11.5 60 15l24 3.5q18 1 28.5 15t7.5 32l-4.5 33.5q-4.5 33.5-5 83.5t7.5 109q8 59 33 111Z" />
  </svg>
)

export { IconTibiaAltOutlined as default }
