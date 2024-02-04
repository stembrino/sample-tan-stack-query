import { useQuery } from 'react-query';

interface Post {
    id: number;
    title: string;
    body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export const usePostsQuery = () => {
  return useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: false,
    refetchInterval: 30000
  });
};