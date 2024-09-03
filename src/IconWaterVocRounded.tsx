import React from 'react'
import { IconProps } from './types'

const IconWaterVocRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-408q0-65 29-128.5T262-658q44-58 95.5-109t95.5-90q6-5 13-7.5t14-2.5q8 0 14.5 2.5T506-857q39 34 79 72.5t76 81.5q23 27 44 55.5t38 58.5q8 14 3 29t-20 23q-15 8-31 3t-24-19q-30-50-77.5-105.5T480-774Q361-665 300.5-573T240-408q0 97 57.5 164.5T443-162q21 3 30 16.5t7 28.5q-2 15-12.5 26T439-82Q315-97 237.5-188.5T160-408Zm320-72ZM619-73q-11 5-22.5.5T580-88l-5-11q-8-17-11.5-35.5T560-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17q11-5 22.5-.5T640-412l5 9q8 17 11.5 36t3.5 39q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l2 5q5 11 .5 23T619-73Zm120 0q-11 5-22.5.5T700-88l-5-11q-8-17-11.5-35.5T680-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17q11-5 22.5-.5T760-412l5 9q8 18 11.5 36.5T780-328q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l2 5q5 11 .5 23T739-73Zm102-354q11-5 22.5-.5T880-412l5 9q8 17 11.5 36t3.5 39q0 22-5 43.5T880-243q-8 17-14 34.5t-6 36.5q0 14 3 27.5t9 26.5l2 5q3 6 3 12t-2 11q-2 5-6 9.5T859-73q-11 5-22.5.5T820-88l-5-11q-8-17-11.5-35.5T800-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17Z" />
  </svg>
)

export { IconWaterVocRounded as default }
