import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
}

export default handleProfileSignup;
