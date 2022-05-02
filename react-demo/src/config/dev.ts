import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'JUMoQ5LldQp2SliWYUZtXnv2v44eWERxJW7K',
  sdkSecret: 'whwEpoaqyFVUsIDYQ15bqKRorturfTKHPyP0',
  topic: 'test_topic',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
};
