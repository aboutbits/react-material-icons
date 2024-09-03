import React from 'react'
import { IconProps } from './types'

const IconHeartMinusRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h240q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400H640Zm-206-94ZM40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q91 0 156.5 62T842-625v11.5q0 5.5-1 11.5-2 24-16 33.5t-29.5 8Q780-562 768-573t-10-29q1-6 1.5-11.5t.5-11.5q0-58-41-96.5T620-760q-46 0-84 26t-66 64q-5 8-13 11.5t-17 3.5q-9 0-17-4t-13-11q-28-38-66-64t-84-26q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228l89-78q12-11 28-10t27 12q12 12 11.5 29.5T582-246l-89 79q-11 10-25 15t-28 5q-14 0-28-5t-25-16q-45-40-104.5-91T169-368.5Q115-427 77.5-491T40-621Z" />
  </svg>
)

export { IconHeartMinusRounded as default }