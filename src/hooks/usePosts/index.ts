// 3rd parties
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../../types';

import { GET_POSTS } from './constants'

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async ()  => {
      const res: AxiosResponse<Post[]> = await axios.get(GET_POSTS);

      setPosts(res.data)
    }
  
    fetchPosts();
  }, []);

  return posts
}