// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1502976572.16
importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js')
uaSetup.worker(self, {
  // This  has a default of `/push-worker.js`. It should live at the root of
  // your domain. It only needs to be specified if your worker lives at a
  // different path.
  // workerUrl: '/push-worker.js',
  
  defaultIcon: 'https://appshorts.files.wordpress.com/2017/03/cooking.jpg',
  defaultTitle: 'Appshorts',
  defaultActionURL: 'https://www.appshorts.com',
  appKey: 'zuFd92DKSy2QizBpLlsUvw',
  token: 'MTp6dUZkOTJES1N5MlFpekJwTGxzVXZ3Onk0cVkwdDVERzdvRmFhWFB6RE5aVTBZZWNOdllmTDJWZGNTVkQ4cl85X0E',
  vapidPublicKey: 'BLFhYHSLxgP9eEGzyXnS3YDaaQUBVtI-f3qX8jxbo5NAD1kAxj4Zkt_sfuc8nJze7ksq-yy23CP0TaCtQYL826Y='
})
