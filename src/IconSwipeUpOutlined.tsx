import React from 'react'
import { IconProps } from './types'

const IconSwipeUpOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M245-400q-51-64-78-141t-27-159q0-27 3-54t9-54l-70 70-42-42 140-140 140 140-42 42-65-64q-7 25-10 50.5t-3 51.5q0 70 22.5 135.5T288-443l-43 43Zm413 273q-23 8-46.5 7.5T566-131L304-253l18-40q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l148 407-100 7 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Zm-90-265-54-151q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150-76 28Zm113-41-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 112-75 28Zm8 78Z" />
  </svg>
)

export { IconSwipeUpOutlined as default }
