import React from 'react'
import { IconProps } from './types'

const IconBedtimeOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M779-211q-12 12-28.5 12T723-210q-12-12-12-28.5t12-28.5q14-13 23.5-26t18.5-32q-85-8-161.5-44.5T466-467q-63-63-99-139t-43-160q-20 11-31 19t-28 24q-11 11-28 11t-28-11q-11-11-11-28t11-28q30-27 60.5-46t77.5-40q20-9 39.5 5t18.5 37q-3 85 27.5 162T523-524q60 60 138 91.5T822-404q23-1 36.5 18t5.5 41q-15 39-35.5 71T779-211ZM708-26l-81-80q-35 13-71 19.5T484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-36 6.5-72t19.5-71l-78-78q-12-12-12-29t12-29q12-12 29-12t29 12L764-83q11 11 11 28t-11 28q-11 11-28 11.5T708-26ZM484-160q20 0 39.5-2.5T563-170L170-563q-5 21-7.5 40.5T160-484q0 135 94.5 229.5T484-160ZM366-367Zm116-116Z" />
  </svg>
)

export { IconBedtimeOffRounded as default }
