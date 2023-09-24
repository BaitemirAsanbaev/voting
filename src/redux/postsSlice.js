// postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [{
    id:1, 
    title:'Запрет налогов со школ',
    author:"Baitemir Asanbaev",
    content:"В школах очень часто происходят сборы денег по непонятной, а может быть и вполне понятной причине. Классные руководители и директора говорят, что это все на обустройство классов, где учатся дети. Однако например в нашей школе уже давно не было видно никаких изменений. Мы требуем принять законопроект, запрещающий проводить денежные сборы в школах",
    comments:[{author:"Emirlan Dogdurbaev", content:"Да, полностью согласен с вами! Уже осточертели каждый месяц просить деньги то на побелку, то на новые шторы и т.д", date:"06-03-2022"}],
    agreement:1372,
    disagreement:19,
    answer:"",
    created_date:"29-02-2022"
  },
  {
    id:2, 
    title:'Забота о животных',
    author:"Sanjar Berdikojoev",
    content:"На улицах часто вижу бедных бездомных животных, аж сердце разрывается. Люди, которые оставляют своих собачек и кошек на улице слишком жестоки. Предлагаю обязать людей, если уж они заводят себе питомцев, тщательнее заботиться о них, чтобы те не убегали из дому.",
    comments:[{author:"Kurbanov Amit", content:"От части соглашусь.", date:"23-08-2021"}, {author:"Nursultan Baktybekov", content:"Недавно моего сына покусала бешеная собака. Сразу поставили укол. Да, это ужасно, что много животных остаются на улице", date:"15-09-2021"}],
    agreement:109,
    disagreement:36,
    answer:"",
    created_date:"12-02-2021"
  },
  {
    id:3, 
    title:'Запрет на бросание мусора',
    author:"Irina Papanova",
    content:"Уже устала видеть каждый день видеть, как многие наши граждане кидают мусор на землю, рядом с урнами, но не в них. Мне кажется следует начать наказывать за подобные действия. Город стал слишком грязным. Люди должны уважать себя и перестать мусорить везде, где только можно.",
    comments:[{author:"", content:"", date:""}],
    agreement:291,
    disagreement:32,
    answer:"",
    created_date:"24-10-2016"
  },
  {
    id:4, 
    title:'Новый общественный транспорт',
    author:"Maksutova Azima",
    content:"Жители Бишкека испытывают большие трудности в перемещении по городу. Дороги часто забиты, но что еще более печально, так это нехватка общественного транспорта. Часто те же самые троллейбусы и маршрутки приезжают полностью забитыми. Людям не хватает места внутри. Мы просим правительство нашей страны завезти в город больше общественного транспорта",
    comments:[{author:"Rustam Samsaev", content:"Абсолютно верно. Вдобавок сейчас мэрия запретила оплату наличными в троллейбусах и автобусах,а картоприемник находится достаточно далеко от входа, что не позволяет нормально платить за проезд. Думаю новая партия общественного транспорта разгрузила бы нынешний и помогла решить эту немалую проблему", date:"24-09-2023"}],
    agreement:1023,
    disagreement:9,
    answer:"",
    created_date:"20-08-2023"
  },
  {
    id:5, 
    title:'Образование',
    author:"Tashbaev Baitur",
    content:"Добрый день. Сейчас образование является одной из самых важных вещей в мире. К сожалению у нас в стране с этим обстоят не самые лучшие дела. Однако я думаю, что у нас есть огромный потенциал развития, которого можно достичь подняв уровень нашего образования. Я предлагаю увеличить бюджет на строительство новых университетов и школ, поднять зарплаты учителям, привлечь новых кадров и пересмотреть саму систему нынешного образования",
    comments:[{author:"Beksultan Almazbekov", content:"Согласен с Байтуром. Нам остро не хватает квалифицированных кадров, в качестве учителей", date:"19-01-2020"}],
    agreement:579,
    disagreement:52,
    answer:"",
    created_date:"12-11-2019"
  },],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    agree: (state, action) =>{
      state.posts[action.payload].agreement += 1
    },
    disagree: (state, action) =>{
      state.posts[action.payload].disagreement += 1
    }
  },
});

export const { addPost, removePost, updatePost, agree, disagree } = postsSlice.actions;

export default postsSlice.reducer;
