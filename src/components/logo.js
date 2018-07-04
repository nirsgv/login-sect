import React from 'react';

export default ( { src ,set_filtering_now, filtering_now} ) => {
    console.log(set_filtering_now);
    console.log(filtering_now);
    return (
        <div className={`logo ${filtering_now ? 'filtering_now' : ''}`}
             onAnimationEnd={() => set_filtering_now(false) }
        >
            <img src='img/logo_red.png' alt='' src={src}/>
        </div>
    )
}