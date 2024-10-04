import React from 'react'
import { IconProps } from './types.js'

export const IconBathPrivateRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M770-580q-29 0-49.5-21T700-651q0-29 20.5-49.5T770-721q29 0 49.5 20.5T840-651q0 29-20.5 50T770-580Zm-580 0q-29 0-49.5-21T120-651q0-29 20.5-49.5T190-721q29 0 49.5 20.5T260-651q0 29-20.5 50T190-580Zm173-60q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 11.5-23t23.5-9q12 0 20 9.5t7 22.5q-2 29 5 52t24 44q26 31 36.5 59.5T400-672q-1 14-12 23t-25 9Zm120 0q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 12-23t24-9q12 0 19.5 10t6.5 23q-2 30 5 52.5t24 42.5q26 31 36.5 59.5T520-672q-1 14-12 23t-25 9Zm120 0q-12 0-19-9.5t-6-21.5q2-23-5-43t-23-39q-27-32-38-64.5t-8-70.5q2-14 12-23t24-9q12 0 19.5 10t6.5 23q-2 30 5 52.5t24 42.5q26 31 36.5 59.5T640-672q-1 14-12 23t-25 9ZM80-280v-120q0-17 11.5-28.5T120-440v-25q0-31 21.5-53t52.5-22q16 0 30.5 7.5T250-514l45 51q6 6 12.5 12t13.5 11h318q8-5 14-11l12-12 45-51q11-11 25.5-18.5T766-540q31 0 52.5 22t21.5 53v25q17 0 28.5 11.5T880-400v120H80Zm80 200q-33 0-56.5-23.5T80-160v-40h800v40q0 33-23.5 56.5T800-80H160Z" />
  </svg>
)
