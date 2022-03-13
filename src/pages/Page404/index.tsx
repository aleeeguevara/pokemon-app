// 3rd parties
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Home() {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      alignItems="center" 
      m={1} 
      p={1} 
      bgcolor="background.paper"
    >
      <h2>Sorry, this page does not exist!</h2>

      <Link href="/">Back to Home</Link>
    </Box>
  );
}
