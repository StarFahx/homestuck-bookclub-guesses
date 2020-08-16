import React, { ReactElement } from 'react';
import WeekDisplay from '../weekdisplay';
import { useSelector, useDispatch } from 'react-redux';
import GetWeeks from '../../api/weeks/get';
import { selectWeeks } from '../../reducers/week';

export default function Main() {
    const weeks = useSelector(selectWeeks);
    const dispatch = useDispatch();
    const children : ReactElement[] = [];

    if (weeks.status === 'unloaded') {
        GetWeeks()(dispatch);
    }

    switch (weeks.status) {
        case 'loaded':
            weeks.weeks.forEach(week => {
                children.push(<WeekDisplay 
                    id={week.id}
                    title={week.name}
                    firstPage={week.firstPage}
                    lastPage={week.lastPage}
                    image={week.pictureSrc}
                    showButton={true}
                />)
            });
    }
    
    return(
        <>
            {children}
        </>
    );
}