import React, { useState } from 'react';
import WeekDisplay from '../weekdisplay';
import { Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import PagesDisplay from '../pagesdisplay';
import Week from '../../reducers/week/week';
import { Person } from '../personselect';

export interface PageProps {
    week : Week;
    user : Person | undefined;
}

type TabType = 'pages' | 'answer' | 'guesses';

export default function Page(props : PageProps) {
    const [tab, setTab] = useState<TabType>('pages');
    const changeTab = (event: React.ChangeEvent<{}>, newValue : TabType) => {
        setTab(newValue);
    }

    return(
        <>
            <WeekDisplay
                id={props.week.id}
                title={props.week.name}
                firstPage={props.week.firstPage}
                lastPage={props.week.lastPage}
                image={props.week.pictureSrc}
                showButton={false}
            />
            <TabContext value={tab}>
                <TabList onChange={changeTab} variant='fullWidth'>
                    <Tab
                        value='pages'
                        label='Pages'
                        wrapped
                    />
                    <Tab
                        value='answer'
                        label='My Answer'
                        disabled={props.user === undefined}
                        wrapped
                    />
                    <Tab
                        value='guesses'
                        label='My Guesses'
                        disabled={props.user === undefined}
                        wrapped
                    />
                </TabList>
                <TabPanel value='pages'>
                    <PagesDisplay weekId={props.week.id} />
                </TabPanel>
                <TabPanel value='answer'>
                    Item Two
                </TabPanel>
                <TabPanel value='guesses'>
                    Item Three
                </TabPanel>
            </TabContext>
        </>
    );
}