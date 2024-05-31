import React, { memo, FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Ranking: FC<IProps> = () => {
    return <div>Ranking</div>
}

// 设置props的默认值

export default memo(Ranking)
