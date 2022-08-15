import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAN_USERS,
  GET_REPOS,
  SEARCH_USER,
} from './types';

let clientId: any;
let secret: any;

if (process.env.NODE_ENV !== 'production') {
  clientId = process.env.REACT_APP_CLIENT_ID;
  secret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  clientId = process.env.CLIENT_ID;
  secret = process.env.CLIENT_SECRET;
}

const GithubState = (props: any) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const onSearch = async (searchUser: any) => {
    setLoading();
    const data: any = await axios.get(
      `https://api.github.com/search/users?q=${searchUser}&${clientId}&${secret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: data.data.items,
    });
  };
  //Get Users
  const SpecUser = async (username: any) => {
    setLoading();
    const data = await axios.get(
      `https://api.github.com/users/${username}?${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USER,
      payload: data.data,
    });
  };
  //Get Repos
  const searchRepos = async (username: any) => {
    setLoading();
    const data = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: data.data,
    });
  };

  //Set Loading

  //Clear Users
  const clearSearch = () => {
    dispatch({
      type: CLEAN_USERS,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        onSearch,
        clearSearch,
        SpecUser,
        searchRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
