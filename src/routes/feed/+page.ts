import type { Post } from './types';
import axios from 'axios';

export const load = async ({}) => {
	try {
		let posts: Array<Post> = [];
		const response = await axios({
			method: 'get',
			// baseURL: 'http://localhost:3000'
			baseURL: 'https://dolle.onrender.com'
		});

		if (response.status === 200) {
			posts = response.data.posts;
			return {
				posts: posts
			};
		}
	} catch (error) {
		return {
			posts: []
		};
	}
};
