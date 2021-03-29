import { useEffect, useState } from 'react';

const useDate = (mill: number) => {
    const [date, setDate] = useState('');

    // TODO: improve this shit
    const seconds = Math.floor((Date.now() - mill) / 1000);
    const minutes = Math.floor((Date.now() - mill) / 60000);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);
    const months  = Math.floor(days / 30);

    useEffect(() => {
        if (seconds < 59 && minutes < 1) setDate(`just now`);
        if (minutes < 59 && seconds > 59) setDate(`${minutes} minutes ago`);
        if (hours < 23 && minutes > 59) setDate(`${hours} hours ago`);
        if (days < 30 && hours > 23) setDate(`${days} days ago`);
        if (days > 30 && months > 1) setDate(`${months} months ago`);
    }, [mill, days, minutes, hours, months, seconds]);

    return { date };
};

export default useDate;
