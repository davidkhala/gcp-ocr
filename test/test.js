const {textDetection} = require('../index')
const path = require('path')
const ClientBuilder = require('../client')
describe('', () => {
	it('dev', async () => {

		const {CLIENT_EMAIL: client_email, PRIVATE_KEY: private_key, PROJECTID: projectId} = process.env
		const client = new ClientBuilder({client_email, private_key, projectId}).build()
		const file = path.resolve(__dirname, 'question37.png')
		const [data, result] = await textDetection(client, file)
		console.debug(result)
		console.info(data)
	})

})
