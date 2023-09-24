import React from "react";
import styles from "./News.module.scss"; // Импортируйте модульный SCSS

const News = () => {
  const data = [
    {
      id: 1,
      title: "Принятие закона о защите окружающей среды",
      image:
        "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/8141862804_f9b70de1e7_z.jpg?4yOS0z_U6OzA7yAymX6130xsJUlf9yIO&itok=dULrIauV",
      text: "Дорогие читатели. Рады вам сообщить что вчера, 17 августа 2021 года был принят законопроект Республиканского масштаба, благодаря которому, мы надеемся, наша страна станет экологически более чистой.",
      created_date: "18-08-2021",
    },
    {
      id: 2,
      title: "Новый транспорт",
      image: "https://24.kg/files/media/287/287866.jpg",
      text: "Дорогие друзья, у нас для вас очень хорошие новости. Наша заявка на запрос нового общественнего транспорта оказалась успешна. И недавно мы получили 10 новых троллейбусов, 15 автобусов и 30 маршруток. Надеемся что в них вам будет комфортно перемещаться.",
      created_date: "27-04-2022",
    },
    {
      id: 3,
      title: "Отказ от законопроекта",
      image:
        "https://media.kg/wp-content/uploads/2023/09/2047747.bf251fd801e573302c0485b3740197e2.jpg",
      text: "Здравствуйте, дорогие читатели. К сожалению, на сегодня у нас не самые приятные новости. Жогорку Кенеш отвергло принятие законопроекта об улучшении системы водоснабжения по всей Республике. Однако, рано унывать. Мы понимаем, что этот закон является очень важным. Поэтому мы будем продолжать добиваться принятия в силу этого законопроекта",
      created_date: "02-05-2023",
    },
    {
      id: 4,
      title: "Глобальное обновление на нашем сайте",
      image:
        "https://hostkoss.com/b/wp-content/uploads/2022/11/hostkoss-blog-what-is-website-2-hostkoss.com_.jpg",
      content:
        "Добрый день. Рады сообщить всем, что внесли кардинальные изменения в наш сайт, естественно в лучшую сторону, по крайней мере надеемся. Обновленный дизайн, новые посты и ... ждут Вас.",
      created_date: "13-10-2019",
    },
    {
      id: 5,
      title: "Более 10000 человек подписали петицию",
      image: "https://24.kg/files/media/267/267053.jpg",
      text: "Доброе утро. Надеемся что у вас все хорошо. Мы рады сообщить, что мы набрали достаточное количество подписей для петиции, целью которой было ...",
      created_date: "12-12-2020",
    },
  ];
  return (
    <div className={styles.NewsContainer}>
      {data.map((item) => (
        <div key={item.id} className={styles.cont}>
          <h2 className={styles.NewsTitle}>{item.title}</h2>
          <p>{item.created_date}</p>
          <img src={item.image} alt=""  width={400}/>
          <p className={styles.NewsText}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
