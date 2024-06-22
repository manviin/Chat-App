export const data = [
  {
    userId: 'user1',
    name: 'Sam',
    unreadCount: 1,
    lastUnreadCount: 1, // Adding lastUnreadCount field to add the unread count after clicking "Mark as Unread"//
    profilePictureURL:
      'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    chat: [
      {
        user1: {
          message: 'Hello',
          timeStamp: '10:40',
        },
        you: {
          message: 'Hey',
          timeStamp: '10:41',
        },
      },
      {
        user1: {
          message: 'How are you doing?',
          timeStamp: '10:41',
        },
        you: {
          message: 'Fine mate, how about you?',
          timeStamp: '10:42',
        },
      },
      {
        user1: {
          message: 'great',
          timeStamp: '10:44',
        },
        you: {
          message: "Coming to my wedding right? I don't think you confirmed.",
          timeStamp: '10:44',
        },
      },
      {
        user1: {
          message: 'Oh yes. There is no way i am going to miss that.',
          timeStamp: '10:44',
        },
        you: {
          message:
            'Awesome. See ya there. Let me know if you want me to book tickets.',
          timeStamp: '10:45',
        },
      },
    ],
  },
  {
    userId: 'user2',
    name: 'Elon',
    unreadCount: 0,
    lastUnreadCount: 0,
    profilePictureURL:
      'https://www.shareicon.net/data/2016/05/24/770117_people_512x512.png',
    chat: [
      {
        user2: {
          message: 'there?',
          timeStamp: '11:39',
        },
        you: {
          message: 'yeah, whats up?',
          timeStamp: '11:47',
        },
      },
      {
        user2: {
          message: 'movie tomorrow?',
          timeStamp: '11:49',
        },
        you: {
          message: 'Yeah sure. let me know the timings. and which movie again?',
          timeStamp: '11:52',
        },
      },
      {
        user2: {
          message: 'the new mad max movie. Reviews are great.',
          timeStamp: '11:52',
        },
        you: {
          message: 'Oh yes, i have been waiting for that one.',
          timeStamp: '11:54',
        },
      },
    ],
  },
  {
    userId: 'user3',
    name: 'Kate',
    unreadCount: 1,
    lastUnreadCount: 1,
    profilePictureURL:
    'https://www.shareicon.net/data/2016/09/15/829452_user_512x512.png',
    chat: [
      {
        user3: {
          message: 'that burger was delicious!',
          timeStamp: '13:12',
        },
        you: {
          message: 'Oh yes, no doubt.',
          timeStamp: '13:13',
        },
      },
      {
        user3: {
          message: 'We are definetely going to that place again.',
          timeStamp: '13:13',
        },
        you: {
          message: 'we are. My mouth waters whenever drive thorugh that area',
          timeStamp: '13:14',
        },
      },
      {
        user3: {
          message: 'haha, I bet. Lets take Tony and Natasha too next time',
          timeStamp: '13:14',
        },
        you: {
          message: 'Sure. they would love it',
          timeStamp: '13:15',
        },
      },
    ],
  },
];
