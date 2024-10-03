import React from 'react'
import { IconProps } from './types.js'

export const IconCheckbookRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M856-386 602-132q-6 6-13.5 9t-15.5 3h-33q-8 0-14-6t-6-14v-33q0-8 3-15.5t9-13.5l254-254 70 70ZM80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680q0 11-12 25.5T840-640h-7q-16 0-30.5 6T777-617L623-463q-11 11-25.5 17t-30.5 6H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h192q14 0 19 12t-5 22L383-223q-11 11-25.5 17t-30.5 6H160q-33 0-56.5-23.5T80-280Zm200-240h160q17 0 28.5-11.5T480-560q0-17-11.5-28.5T440-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm600 110-70-70 36-36q5-5 11-5t11 5l48 48q5 5 5 11t-5 11l-36 36Z" />
  </svg>
)
