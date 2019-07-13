const initialState = {
	items: [
		{
    "id": 0,
    "title": "Происхождение",
    "author": "Дэн Браун",
    "image":
      "https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
    "price": 710,
    "rating": 3
  },
  {
    "id": 1,
    "title": "1984",
    "author": "Джордж Оруэлл",
    "image":
      "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
    "price": 415,
    "rating": 5
  },
  {
    "id": 2,
    "title": "Девушка в тумане",
    "author": "Донато Карризи",
    "image":
      "https://cv2.litres.ru/sbc/31635724_cover_185-elektronnaya-kniga-donato-karrizi-devushka-v-tumane.jpg",
    "price": 464,
    "rating": 4
  }
	]
};

export default (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				items: [
					...state.items, action.payload
				]
			};

		case 'REMOVE_BOOK':
			return {
				...state,
				items: state.items.filter(book => book.id !=action.payload)
			};
			break;

		default:
			return state 
	}
} 