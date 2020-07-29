import axios from 'axios';
import { useState, useEffect } from 'react';

/** User name and repo name constants */
const USER_NAME = 'jesse7zhangjc';
const REPO_NAME = 'about-jingcheng';
const getRepoStatusUrl = `https://api.github.com/repos/${USER_NAME}/${REPO_NAME}`;
const retryTimes = 3;

export enum RepoStatusKey {
  FORKS_COUNT = 'forks_count',
  WATCHERS_COUNT = 'watchers_count',
  STARGAZERS_COUNT = 'stargazers_count',
  SUBSCRIBERS_COUNT = 'subscribers_count',
  SIZE = 'size',
  UPDATED_AT = 'updated_at',
  CREATED_AT = 'created_at',
}

export interface IRepoStatus {
  [RepoStatusKey.FORKS_COUNT]: number;
  [RepoStatusKey.WATCHERS_COUNT]: number;
  [RepoStatusKey.STARGAZERS_COUNT]: number;
  [RepoStatusKey.SUBSCRIBERS_COUNT]: number;
  [RepoStatusKey.SIZE]: number;
  [RepoStatusKey.UPDATED_AT]: string;
  [RepoStatusKey.CREATED_AT]: string;
}

/** Github repo status hook */
export const useRepoStatus = () => {
  const [repoStatus, setRepoStatus] = useState<IRepoStatus | undefined>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const [retriesLeft, setRetriesLeft] = useState(retryTimes);
  useEffect(() => {
    const fetchRepoStatus = async () => {
      try {
        setIsLoading(true);
        const newRepoStatus = await axios.get(getRepoStatusUrl);
        setRepoStatus(newRepoStatus.data);
        setIsLoading(false);
      } catch (err) {
        setRetriesLeft(retriesLeft - 1);
        setIsLoading(undefined);
      }
    };
    if (!repoStatus && isLoading === undefined) {
      retriesLeft > 0 ? fetchRepoStatus() : setIsLoading(false);
    }
  }, [repoStatus, isLoading, retriesLeft]);

  return [repoStatus, isLoading];
};
