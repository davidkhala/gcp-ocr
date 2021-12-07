import {textDetection} from '../index.js'
import path from 'path'
import ClientBuilder from '../client.js'
import {fileURLToPath} from "url";

describe('', () => {
	it('dev', async () => {


		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);

		const {CLIENT_EMAIL: client_email, PRIVATE_KEY: private_key, PROJECTID: projectId} = process.env
		const client = new ClientBuilder({client_email, private_key, projectId}).build()
		const file = path.resolve(__dirname, 'question37.png')
		const [data, result] = await textDetection(client, file)
		console.debug(result)
		console.info(data)
	})

})
