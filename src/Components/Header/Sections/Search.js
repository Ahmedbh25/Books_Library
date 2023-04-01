import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getBooks } from '../../utils/BooksApi';
import { styled, InputBase, Button, alpha } from '@mui/material';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

function SearchInput({handleOpen, setResult, setLoading, result}) {
  const [search, setSearch] = useState('');

  const isLogin = localStorage.getItem('getID');


  const HandleSearchBook = (e) => {
    setSearch(e.target.value)
  }

  const handleCLick = async () => {
    if (search.length > 3) {
      await setResult(setResult(getBooks(search, 'intitle:%22').then(data => setResult(data))));
      setLoading(false);
    }
    handleOpen();
    console.log(result);
  }

  return (
    <React.Fragment>
      <Search sx={{ width: { sm: 300, md: 200 }, mr: 1, overflow: 'hidden' }}>

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Books …"
          inputProps={{ 'aria-label': 'search' }}
          onChange={HandleSearchBook}
        />
      </Search>
      <Button variant='outlined' sx={{ color: "orange", float: 'right', borderColor: 'orange' }} onClick={handleCLick}>Search</Button>

    </React.Fragment>
  )
}

export default SearchInput