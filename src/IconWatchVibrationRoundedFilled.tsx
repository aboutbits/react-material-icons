import React from 'react'
import { IconProps } from './types'

const IconWatchVibrationRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-480q0-50 10-96t30-88q7-15 23-19.5t30 3.5q14 8 19 24t-2 32q-14 33-22 69.5t-8 74.5q0 38 8 74.5t22 69.5q7 16 2 32t-19 24q-14 8-30 3.5T80-296q-20-42-30-88t-10-96Zm880 0q0 50-10 96t-30 88q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q14-33 22-69.5t8-74.5q0-38-8-74.5T810-624q-7-16-2-32t19-24q14-8 30-3.5t23 19.5q20 42 30 88t10 96ZM420-80q-26 0-47.5-15.5T343-137l-23-77q-6-20-18.5-40.5T269-297q-34-37-51.5-84T200-480q0-51 17.5-98t51.5-85q20-23 32.5-43t18.5-40l23-77q8-26 29.5-41.5T420-880h120q26 0 47.5 15.5T617-823l23 77q6 20 18.5 40.5T691-663q34 37 51.5 84t17.5 99q0 51-17.5 98T691-297q-20 23-32.5 43T640-214l-23 77q-8 26-29.5 41.5T540-80H420Zm60-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
  </svg>
)

export { IconWatchVibrationRoundedFilled as default }
