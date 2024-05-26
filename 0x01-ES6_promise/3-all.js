import { uploadPhoto, createUser } from './utils'

function handleProfileSignup() {
	uploadPhoto().then(response => {
		createUser().then(response_1 => {
			console.log(`${response.body} ${response_1.firstName} ${response_1.lastName}`);
		})
	});
}

export default handleProfileSignup;
