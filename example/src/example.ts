import {Configuration, ProfileApi} from './lib/api';
import {AxiosError} from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error('API_KEY environment variable is required');
}

// Initialize API client with configuration
const config = new Configuration({
    apiKey: API_KEY,
});

const profileApi = new ProfileApi(config);

async function demonstrateProfileApi() {
    try {
        // Create a new profile
        console.log('Creating a new profile...');
        const newProfile = await profileApi.createProfile({
            name: 'John Doe ' + Math.random().toString(36).substring(7),
            id: Math.random().toString(36).substring(7),
        });
        console.log('Created profile:', newProfile.data);

        if (!newProfile.data.id) {
            throw new Error('Profile ID is missing');
        }

        // List profiles with pagination
        console.log('\nListing profiles (first page)...');
        const profiles = await profileApi.listProfile(0, 10, 'name:asc');
        console.log('Profiles:', profiles.data);

        // Get profile by ID
        const profileId = newProfile.data.id;
        console.log(`\nGetting profile with ID ${profileId}...`);
        const profile = await profileApi.getProfileById(profileId);
        console.log('Profile:', profile.data);

        // Update profile
        console.log('\nUpdating profile...');
        const updatedProfile = await profileApi.updateProfile(profileId, {
            name: 'John Smith rename ' + Math.random().toString(36).substring(7),
        });
        console.log('Updated profile:', updatedProfile.data);

        // Delete profile
        console.log('\nDeleting profile...');
        await profileApi.deleteProfile(profileId);
        console.log('Profile deleted successfully');

    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('API Error:', error.response?.data || error.message);
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
        process.exit(1);
    }
}

// Run the demonstration
demonstrateProfileApi();