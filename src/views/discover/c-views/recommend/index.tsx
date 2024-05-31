import React, { memo, FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    return <div>Recommend</div>
}


export default memo(Recommend)
