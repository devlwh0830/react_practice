import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage(){

    const [isLoading, setIsLoding] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    
    useEffect(()=>{
        setIsLoding(true);
        fetch('https://react-57628-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id:key,
                    ...data[key],
                }
                meetups.push(meetup);
            }

            setIsLoding(false);
            setLoadedMeetups(meetups);
        });
    },[]);

    if(isLoading){
        return <section>
            <p>loading...</p>
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
       <MeetupList meetups={loadedMeetups}/>
    </section>;
}

export default AllMeetupsPage;