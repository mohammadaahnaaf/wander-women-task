// hooks/useProfile.ts
import { useState, useEffect } from 'react';

interface UserProfile {
    id: number;
    data: string;
}

export const useProfile = () => {
    const [profiles, setProfiles] = useState<UserProfile[]>([]);

    useEffect(() => {
        // Retrieve data from local storage on component mount
        const storedProfiles = localStorage.getItem('userProfiles');
        if (storedProfiles) {
            setProfiles(JSON.parse(storedProfiles));
        }
    }, []);

    useEffect(() => {
        // Save data to local storage when profiles state changes
        localStorage.setItem('userProfiles', JSON.stringify(profiles));
    }, [profiles]);

    const saveProfile = (newProfile: UserProfile) => {
        // Update state with the new profile
        console.log("new profile: " + newProfile.id + ' ' + profiles.length)

        profiles.push(newProfile)
        console.log("length: " + profiles.length)
    };

    const clearProfiles = () => {
        // Clear data from local storage and reset state
        localStorage.removeItem('userProfiles');
        setProfiles([]);
    };

    return { profiles, saveProfile, clearProfiles };
};