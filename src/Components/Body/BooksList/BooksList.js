import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";
import SingleBook from '../SingleBook/SingleBook';
import Loading from '../Loading/Loading';
import { getBooks } from '../../utils/BooksApi';

function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  let { BookID } = useParams();

  useEffect(() => {
    setLoading(true);
    getBooks(BookID, '').then(data => setBooks(data));
    setLoading(false);
  }, [BookID]);

  
  return (
    <React.Fragment>

        {books.length > 0 && loading === false ?

          (
            <Box sx={{ backgroundColor: "silver" }}>
              <CssBaseline />
              <React.Fragment>
                <main>

                  <Box
                    sx={{
                      pt: 8,
                      pb: 6,
                    }}
                  >
                    <Container maxWidth="sm">
                      <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                      >
                        Books List
                      </Typography>
                      <Typography variant="h5" align="center" paragraph>
                        This is a Collection of {BookID} Books List :
                      </Typography>

                    </Container>
                  </Box>
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                      {books.map((book) => (
                        <Grid item key={book.id} xs={12} sm={6} md={4}>
                          <SingleBook Databook={book} />
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </main>
              </React.Fragment>
            </Box>
          )
          :
          (
            <Typography variant="h6" color="inherit" noWrap>
              <Loading />
            </Typography>
          )
      }
    </React.Fragment>
  )}

export default BooksList