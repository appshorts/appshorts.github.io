// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1505233190.07
importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js')
uaSetup.worker(self, {
  // This  has a default of `/push-worker.js`. It should live at the root of
  // your domain. It only needs to be specified if your worker lives at a
  // different path.
  // workerUrl: '/push-worker.js',
  
  defaultIcon: 'https://www.appshorts.com/static/favicon.png',
  defaultTitle: 'Notification From Appshorts',
  defaultActionURL: 'https://www.appshorts.com',
  appKey: '5NM_LbLhRPOiBochEedXFA',
  token: 'MTo1Tk1fTGJMaFJQT2lCb2NoRWVkWEZBOmtaUllsUXpUMzVaSmVmektuaW9QRER5a2RXNFFoZENUZksxaGUxUWVXTjg',
  vapidPublicKey: 'BGXGNkW0RN0d1yTEPM39GrjmjeZozYi8d96mKxOy7jHZsQiqFROmzO1pAIBRMHTFHBfgdEXCRLJ42nc1rIJjUHo='
})
