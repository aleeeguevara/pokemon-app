export interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface TableProps {
  dataSource: Post[];
  title: string;
}