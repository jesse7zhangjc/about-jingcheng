import React, { useState } from 'react';
import {
  Divider,
  Header,
  Statistic,
  Grid,
  Loader,
  Message,
  Icon,
} from 'semantic-ui-react';
import moment from 'moment';

import { useRepoStatus, IRepoStatus, RepoStatusKey } from 'apis/github';
import messages from 'messages';

const { statsPage: spm } = messages;
const NADash = '-';

interface IRepoStatsNAWarningMessageProps {
  showWarning: boolean;
}

const RepoStatsNAWarningMessage = ({
  showWarning,
}: IRepoStatsNAWarningMessageProps) => {
  if (!showWarning) {
    return null;
  }
  return (
    <Message warning>
      <Message.Header>
        <Icon name="warning" />
        {spm.repoStatsNotAvailable}
      </Message.Header>
    </Message>
  );
};

const AboutThisRepoSection = () => {
  const [repoStatus, isLoading] = useRepoStatus() as [
    IRepoStatus | undefined,
    boolean | undefined
  ];
  const [showWarning, setShowWarning] = useState(false);
  const getStatusticValue = (
    statusKey: RepoStatusKey,
    isLoading?: boolean,
    repoStatus?: IRepoStatus
  ) => {
    if (isLoading) {
      return <Loader active />;
    }
    if (repoStatus) {
      switch (statusKey) {
        case RepoStatusKey.CREATED_AT:
        case RepoStatusKey.UPDATED_AT:
          return moment(repoStatus[statusKey]).fromNow();
        default:
          return repoStatus[statusKey].toLocaleString();
      }
    }

    !showWarning && isLoading === false && !repoStatus && setShowWarning(true);
    return NADash;
  };
  return (
    <div>
      <Divider hidden section />
      <Header size="large" className="about-this-repo-title">
        {spm.aboutThisRepo}
        <a
          href="https://github.com/jesse7zhangjc/about-jingcheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" className="about-this-repo-icon" />
        </a>
      </Header>
      <RepoStatsNAWarningMessage showWarning={showWarning} />
      <Divider hidden />
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={16}>
            <Statistic.Group size="tiny" widths={5}>
              <Statistic
                value={getStatusticValue(
                  RepoStatusKey.SIZE,
                  isLoading,
                  repoStatus
                )}
                label={spm.lines}
              />
              <Statistic
                value={getStatusticValue(
                  RepoStatusKey.FORKS_COUNT,
                  isLoading,
                  repoStatus
                )}
                label={spm.forks}
              />
              <Statistic
                value={getStatusticValue(
                  RepoStatusKey.STARGAZERS_COUNT,
                  isLoading,
                  repoStatus
                )}
                label={spm.stargazers}
              />
              <Statistic
                value={getStatusticValue(
                  RepoStatusKey.SUBSCRIBERS_COUNT,
                  isLoading,
                  repoStatus
                )}
                label={spm.subscribers}
              />
              <Statistic
                value={getStatusticValue(
                  RepoStatusKey.WATCHERS_COUNT,
                  isLoading,
                  repoStatus
                )}
                label={spm.watchers}
              />
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Statistic.Group size="tiny" widths={2}>
              <Statistic>
                <Statistic.Label>{spm.updated}</Statistic.Label>
                <Statistic.Value>
                  {getStatusticValue(
                    RepoStatusKey.UPDATED_AT,
                    isLoading,
                    repoStatus
                  )}
                </Statistic.Value>
              </Statistic>
              <Statistic>
                <Statistic.Label>{spm.created}</Statistic.Label>
                <Statistic.Value>
                  {getStatusticValue(
                    RepoStatusKey.CREATED_AT,
                    isLoading,
                    repoStatus
                  )}
                </Statistic.Value>
              </Statistic>
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AboutThisRepoSection;
