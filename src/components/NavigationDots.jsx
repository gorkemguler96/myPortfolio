import React from 'react';

function NavigationDots({active}) {
    return (
        <div className={"app__navigation"}>
            {/*{['home','about','work','skills','testimonials','contact'].map((x,index)=>(*/}
            {/*        <a*/}
            {/*            style={active === x ? {backgroundColor: '#313BAC'} : { }}*/}
            {/*            href={`#${x}`}*/}
            {/*            key={x+index}*/}
            {/*            className={"app__navigation-dot"}*/}
            {/*        />*/}
            {/*))}*/}
        </div>
    );
}

export default NavigationDots;
