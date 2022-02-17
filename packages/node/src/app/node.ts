import axios, { AxiosInstance } from 'axios';

type ECParams = {
  apiKey: string;
};

export type Maybe<T> = T | null;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
};

export type ActivityLogCreateInput = {
  startDate: Scalars['AWSDateTime'];
  endDate: Scalars['AWSDateTime'];
  activityId?: Maybe<Scalars['String']>;
  inputs?: Maybe<Scalars['AWSJSON']>;
};

export class EC {
  api: AxiosInstance;

  constructor(params: ECParams) {
    if (!params.apiKey) {
      throw new Error('apiKey is required');
    }

    // create an instance of axios
    this.api = axios.create({
      baseURL: 'https://api.exhibit-c.co.uk',
      headers: {
        'X-Api-Key': params.apiKey,
      },
    });
  }

  listActivities = async (): Promise<string> => {
    const response = await this.api.get('/activities');
    return 'test';
  };

  getActivity = async (activityId: string): Promise<string> => {
    const response = await this.api.get(`/activities/${activityId}`);
    return 'test';
  };

  /**
   * This will return a list of this months logs for your organisation.
   * The returned logs are only for the calendar month and not the full month.
   *
   * @async
   * @returns {Promise<string>}
   */
  listMonthlyLogs = async (): Promise<string> => {
    const response = await this.api.get('/logs/monthly');
    return 'test';
  };

  /**
   * Create a new log for your organisation.
   *
   * @async
   * @param {string} activityId
   * @returns {Promise<string>}
   */

  createLog = async (params: ActivityLogCreateInput): Promise<string> => {
    const response = await this.api.post(`/logs`, { ...params });
    return params.activityId ?? '';
  };
}
