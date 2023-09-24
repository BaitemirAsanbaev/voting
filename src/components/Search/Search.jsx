import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const data = [
    {
      id: 38,
      title: "Ярко район спалить.",
      date: "01.04.2001",
      text: "Вытаскивать функция способ холодно. Написать следовательно нож боец мелочь полевой слишком. Функция беспомощный войти приходить поймать потянуться нож даль.",
      voice: 1760,
      category: "суды",
      author: "user1",
    },
    {
      id: 39,
      title: "Школьный появление мотоцикл направо а.",
      date: "24.06.1988",
      text: "Рот видимо мотоцикл. Бетонный палата результат.",
      voice: 54,
      category: "экология",
      author: "user2",
    },
    {
      id: 40,
      title: "Холодно вскинуть скрытый миллиард светило.",
      date: "22.07.2008",
      text: "Освободить труп сынок руководитель жестокий художественный. Левый строительство покидать командующий.",
      voice: 1835,
      category: "религия",
      author: "админ",
      author: "админ",
      author: "user1",
    },
    {
      id: 41,
      title: "Адвокат академик доставать плавно оборот.",
      date: "01.12.1981",
      text: "Иной горький расстройство бетонный запустить эпоха костер. Около неожиданный сохранять дурацкий инвалид грудь пространство а. Уничтожение забирать чем.",
      voice: 199,
      category: "суды",
      author: "user1",
    },
    {
      id: 42,
      title:
        "Новый ответить район табак ленинград серьезный недостаток смелый.",
      date: "15.08.1993",
      text: "Основание крыса смеяться. Бочок скользить сравнение белье жить. Наслаждение аллея совещание вскинуть.",
      voice: 1896,
      category: "религия",
      author: "админ",
    },
    {
      id: 43,
      title: "Очередной горький бровь.",
      date: "01.03.1988",
      text: "Вытаскивать космос бабочка вскакивать валюта тревога. Цепочка голубчик поезд неожиданно. Разводить угроза пересечь темнеть манера материя.",
      voice: 1840,
      category: "религия",
      author: "админ",
    },
    {
      id: 44,
      title: "Горький сбросить металл недостаток нож жестокий иной встать.",
      date: "05.09.1983",
      text: "Остановить пастух затянуться. Результат госпожа передо коммунизм сверкающий уточнить команда. Кузнец оборот провал какой вряд.",
      voice: 1466,
      category: "суды",
      author: "user1",
    },
    {
      id: 45,
      title:
        "Валюта чувство приятель ярко привлекать исследование направо четко.",
      date: "14.02.2002",
      text: "Деньги ответить ленинград неудобно песенка. Тревога самостоятельно ручей багровый. Сомнительный монета спешить правление.",
      voice: 1515,
      category: "суды",
      author: "user1",
    },
    {
      id: 46,
      title: "Неправда тревога гулять наслаждение близко отражение.",
      date: "17.04.1990",
      text: "Табак ученый багровый исследование салон солнце жидкий. Монета хлеб народ слишком жидкий постоянный. Полностью правильный пространство триста столетие.",
      voice: 1703,
      category: "суды",
      author: "user1",
    },
    {
      id: 47,
      title: "Коробка зеленый иной заложить правление.",
      date: "05.09.2019",
      text: "Возникновение стакан труп научить слишком. Сбросить труп порядок другой прежде висеть желание. Выдержать терапия кузнец. Гулять сохранять белье возбуждение совещание посидеть.",
      voice: 1033,
      category: "бизнес",
    },
    {
      id: 48,
      title: "Идея сверкать равнодушный.",
      date: "21.07.2004",
      text: "Костер адвокат понятный. Редактор правильный пастух тяжелый коммунизм.",
      voice: 1143,
      category: "суды",
      author: "user1",
    },
    {
      id: 49,
      title: "Порт бровь господь покидать.",
      date: "16.12.2011",
      text: "Премьера посвятить степь оборот сустав зима зима. Следовательно выраженный направо упорно снимать угроза собеседник.",
      voice: 1441,
      category: "бизнес",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = data.filter((item) => {
    if (selectedCategory === "") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div>
      <h2 className={styles.title}>Поиск по категории</h2>
      <select
        onChange={handleCategoryChange}
        value={selectedCategory}
        className={styles.categorySelect}
      >
        <option value="">Все категории</option>
        <option value="медицина">Медицина</option>
        <option value="суды">Суды</option>
        <option value="природа">Природа</option>
        <option value="бизнес">Бизнес</option>
        <option value="религия">Религия</option>
      </select>

      <div className={styles.postList}>
        {filteredData.map((item, index) => (
          <div key={index} className={styles.post}>
            <h2>{item.title}</h2>
            <span>{item.date}</span>
            <p>{item.text}</p>
            <div className={styles.btnCont}>
              <button>читать больше</button>
              <p>{item.voice} голосов</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
