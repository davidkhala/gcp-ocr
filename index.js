const {ImageAnnotatorClient}= require('@google-cloud/vision');

exports.textDetection = async (client = new ImageAnnotatorClient(),file)=>{
	const [result] = await client.textDetection(file);
	console.log(result);
	const data = result.fullTextAnnotation.text;
	return data
}
