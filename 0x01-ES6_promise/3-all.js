import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default handleProfileSignup;