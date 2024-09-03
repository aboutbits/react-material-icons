import React from 'react'
import { IconProps } from './types'

const IconNoiseAwareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-878q10-1 20-1.5t20-.5q11 0 20.5.5T520-878v80q-10-2-19.5-2h-41q-9.5 0-19.5 2v-80Zm-168 56q17-11 34.5-19t36.5-15l35 72q-20 6-37.5 14.5T306-750l-34-72Zm382 72q-17-11-34.5-19.5T582-784l35-72q19 7 36.5 15t34.5 19l-34 72Zm99 101q-11-17-24-32.5T702-711l63-50q14 14 27 29.5t24 32.5l-63 50Zm-610-48q11-17 23.5-32.5T193-759l63 50q-14 14-26.5 29.5T206-647l-63-50ZM83-532q2-20 7-39.5t11-38.5l79 18q-7 19-11.5 38.5T162-514l-79-18Zm716 21q-2-20-6.5-40T781-590l78-18q6 19 11 38.5t7 39.5l-78 19Zm-18 141q7-19 11-38t6-39l79 18q-2 20-7 39.5T859-351l-78-19Zm-619-76q2 20 6.5 39.5T180-368l-79 18q-6-19-11-38.5T83-428l79-18Zm543 194q14-14 26-29.5t23-32.5l64 50q-11 17-23.5 32.5T768-202l-63-50Zm-511 52q-14-14-26.5-30T144-263l62-50q11 17 23.5 33t26.5 30l-62 50Zm389 23q20-7 37-15t34-19l35 72q-17 11-34.5 19.5T618-104l-35-73Zm-239 74q-19-7-37-15.5T272-138l35-72q17 11 34.5 19.5T379-176l-35 73Zm136 23q-10 0-20-.5T440-82v-80q13 2 40 2h20.5q9.5 0 19.5-2v80q-10 1-19.5 1.5T480-80Zm40-160q-38 0-69.5-23T406-322q-3-9-6.5-17.5T389-355l-55-55q-26-26-40-59.5T280-540q0-75 52.5-127.5T460-720q69 0 120 45.5T639-560h-81q-7-35-34.5-57.5T460-640q-42 0-71 29t-29 71q0 20 8 39.5t23 34.5l54 54q14 14 22.5 30.5T482-348q5 13 15 20.5t23 7.5q17 0 28.5-11.5T560-360h80q0 50-34.5 85T520-240Zm20-160q-25 0-42.5-17.5T480-460q0-26 17.5-43t42.5-17q26 0 43 17t17 43q0 25-17 42.5T540-400Z" />
  </svg>
)

export { IconNoiseAwareSharp as default }
