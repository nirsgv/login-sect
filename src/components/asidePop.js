import React from 'react';

const AsidePop = ( { className, children} ) => {
    return (
        <aside className={`${className} pop`}>
            {children}
        </aside>
    )
};

export default AsidePop;