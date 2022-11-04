const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC2ViBfaLuk5sON2iGLolAQQ&part=snippet%2Cid&order=date&maxResults=9";

const content = document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a870545319msh3a77aa458b6c564p18c5a2jsn5489fbcef58a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    //creamos una funcion map que vaya transformando cada elemento del array y lo inserte en en el html
    let view = `
    ${videos.items.map(video => `  
      <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
      </div>
      <div class="mt-4 flex justify-center">
        <h3 class="text-md text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title}
        </h3>
      </div>
    </div>
    `).join('')}
    `;
    content.innerHTML = view;
  } catch {
    throw new Error();
  }
})() // se crea una funcion asincrona que se llama a si musma (se le agrega () al final)

