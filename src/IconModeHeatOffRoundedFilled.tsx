import React from 'react'
import { IconProps } from './types'

const IconModeHeatOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M561-668q17 0 32.5-7t28.5-23q8-10 19.5-11.5T664-704q62 44 99 113.5T800-440q0 17-2 33.5t-5 32.5q-5 25-30.5 31T718-356L346-728q-13-13-13-31.5t14-30.5q17-15 34-27t32-22q22-14 44.5-2t22.5 39v54q0 37 25 58.5t56 21.5ZM339-417q-29 29-44 64t-15 75q0 9 .5 18t2.5 18q3 16-13 22.5t-29-7.5q-11-12-20.5-25.5T203-280q-20-35-31.5-75.5T160-440q0-78 29-143t71-117l182 182-103 101Zm141 257q-50 0-85-34.5T360-278q0-23 9-44.5t26-38.5l85-83 85 83q17 17 26 38t9 45q0 49-35 83.5T480-160Zm283 76L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Z" />
  </svg>
)

export { IconModeHeatOffRoundedFilled as default }
