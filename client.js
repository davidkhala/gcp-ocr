// Reference: https://googleapis.dev/nodejs/vision/latest/v1.ImageAnnotatorClient.html
const {ImageAnnotatorClient} = require('@google-cloud/vision');

class ImageAnnotatorClientBuilder {
	/**
	 *
	 * @param {string} client_email
	 * @param {PEM|string} private_key string in PEM format
	 * @param {string} projectId
	 */
	constructor({client_email, private_key, projectId}) {
		this.options = {
			// extends from `GoogleAuthOptions` of npm google-auth-library
			credentials: {
				client_email,
				private_key,
			},
			projectId,
		}
	}

	build() {
		return new ImageAnnotatorClient(this.options)
	}
}


module.exports = ImageAnnotatorClientBuilder
