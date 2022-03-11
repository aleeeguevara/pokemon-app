// 3rd parties
import { Container, StylesProvider } from '@material-ui/core';

// Components
import { Table } from './components/Table';

// Hooks
import { usePosts } from './hooks/usePosts';

export default function AppPage() {
  const posts = usePosts();

  return (
    <StylesProvider injectFirst>
      <Container>
        <Table dataSource={posts} title="Table Pagination" />
      </Container>
    </StylesProvider>  
  );
}