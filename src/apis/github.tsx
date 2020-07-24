import axios from 'axios';
import { useState } from 'react';

/** User name and repo name constants */
const USER_NAME = 'jesse7zhangjc';
const REPO_NAME = 'about-jingcheng';
const getUrl = `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}`

interface IRepoStatus {
  forks_count?: number;
  watchers_count?: number;
  stargazers_count?: number;
  subscribers_count?: number;
  size?: number;
  updated_at?: string;
};

/** Github repo status hook */
export const useRepoStatus = async () => {
  const [repoStatus, setRepoStatus] = useState({});
  try {
    const newRepoStatus: IRepoStatus = await axios.get(getUrl);
    setRepoStatus(newRepoStatus);
    console.log(newRepoStatus);
    return repoStatus;
  } catch(error) {
    console.log('get status failed');
  }
};