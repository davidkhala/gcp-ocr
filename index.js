/**
 *
 * @param {ImageAnnotatorClient} client
 * @param {string} filePath
 * @return {Promise<(string|google.cloud.vision.v1.IAnnotateImageResponse)[]>}
 */
export async function textDetection(client, filePath) {
	const [result] = await client.textDetection(filePath);
	const data = result.fullTextAnnotation.text;
	return [data, result]
}
