import React from 'react'
import { IconProps } from './types'

const IconTibiaRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-592-85-85q-17-17-26-39t-9-45q0-50 34-84.5t84-34.5h244q49 0 82.5 35t33.5 84q0 24-9.5 46.5T682-675l-82 82v222l84 84q17 17 26 39t9 46q0 51-34.5 86T599-81q-24 0-46-9t-39-26q-7-7-15.5-10.5T480-130q-10 0-18.5 3.5T446-116q-17 17-39 26t-46 9q-51 0-86.5-35T239-202q0-24 9.5-46t26.5-39l85-83v-222Zm80-17v256q0 8-3.5 15.5T428-325l-96 95q-6 5-9 12.5t-3 15.5q0 17 12 29.5t29 12.5q8 0 15.5-3t13.5-9q18-18 41-28t49-10q26 0 49.5 10t40.5 28q6 5 13.5 8.5T599-160q17 0 29.5-12.5T641-202q0-8-3-15.5T628-230l-96-95q-5-6-8.5-13t-3.5-15v-256q0-8 3-15.5t8-12.5l95-96q6-6 9.5-13.5T639-762q0-16-11-27t-27-11H358q-16 0-27 11.5T320-761q0 8 3 15t8 13l97 96q6 5 9 12.5t3 15.5Zm41 129Z" />
  </svg>
)

export { IconTibiaRounded as default }
