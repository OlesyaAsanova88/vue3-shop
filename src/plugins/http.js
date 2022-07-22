const BASE_URL = 'http://faceprog.ru/reactcourseapi/';

export async function request(url, options){
	// in real: try-catch, error hadler, mb store errors.add
	let response = await fetch(BASE_URL + url, options);
	let data = await response.json();
	return data;
}