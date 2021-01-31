import './../css/PostStyles.css';

import Post from './Post';

const friends = [
  {
    id: 1,
    name: 'Ross Eustace Geller',
    nickname: '@ross_unagi',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f2/Ross_Geller.jpg/274px-Ross_Geller.jpg',
    content: 'Подобаються мені наші фото) Вони завжди такі цікаві...',
    postPhoto: 'https://gator.radiotrek.rv.ua/media/gallery/full/f/r/friends.jpg'
  },
  {
    id: 2,
    name: 'Joseph Francis Tribbiani',
    nickname: '@your_sweet',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/b/bb/Joey_Tribbiani.jpg',
    content: 'Ага, як тоді, коли нам принесли порнографічний торт :)',
    postPhoto: 'https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/134177/friends-30-5jpg/medium.jpg'
  },
  {
    id: 3,
    name: 'Monica E. Geller',
    nickname: '@monica_garmonika',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/e4/Monicaegeller.jpg',
    content: 'А пам\'ятаєте, як ми хотіли подивитися home відео Роса і Рейчел?',
    postPhoto: 'https://images.unian.net/photos/2019_11/thumb_files/400_0_1573631299-6900.jpeg?0.8646077519716482'
  },
  {
    id: 4,
    name: 'Rachel Karen Green',
    nickname: '@ralph_rachel',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Jennifer_Aniston_as_Rachel_Green.jpg',
    content: 'Після перегляду Джої вирішив уточнити деякі речі в Роса',
    postPhoto: 'https://bituk.media/wp-content/uploads/2020/09/5cf89e2ca8097.jpg'
  },
  {
    id: 5,
    name: 'Phoebe Buffay',
    nickname: '@filangi',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b1/Phoebe_buffay.jpg/274px-Phoebe_buffay.jpg',
    content: 'Угу, а сестра твоя не могла відірвати погляд...',
    postPhoto: 'https://imgclf.112.ua/original/2019/11/18/407906.jpg?timestamp=1574084479'
  }
];

function MakePost() {
  return (
    <div>
      {friends.map(friend => <Post {...friend} key = {friend.id} />)}
    </div>
  )
}

export default MakePost;