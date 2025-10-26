# 🧩 Todo App — React + useCallback Optimization

![React](https://img.shields.io/badge/React-18.0+-61dafb?logo=react&logoColor=white)

---

## 📝 О проекте

Современное **Todo-приложение** на React с использованием `useCallback` и `React.memo` для оптимизации производительности.
Все задачи сохраняются в **LocalStorage**, а интерфейс выполнен в минималистичном и адаптивном стиле.

---

## 🚀 Возможности

- ✏️ Добавление и удаление задач
- ✅ Отметка выполненных дел
- 🔄 Переключение между **Активными** и **Завершёнными**
- 💾 Сохранение состояния в `localStorage`
- ⚡ Оптимизация через `useCallback` + `React.memo`
- 🌈 Поддержка **тёмной и светлой темы**
- 🕒 Живой **часы + дата**
- 📱 Адаптивный интерфейс для мобильных устройств
- ✨ Плавные анимации и hover-эффекты

---

## 🧠 Оптимизация с `useCallback` и `React.memo`

Использование `useCallback` в **TodoForm** и дочерних компонентах позволяет:

- 🔹 Избежать лишних перерендеров
- 🔹 Снизить нагрузку на интерфейс при большом количестве задач
- 🔹 Повысить отзывчивость UI

Компоненты, оптимизированные с помощью `memo`:

- `TodoBtn`
- `TodoInputTitle`
- `TodoInputDescription`
- `TodoList`
- `BtnArea`
- `ThemeToggle`
- `Title`

---

## 🛠️ Технологии

| Технология      | Назначение             |
| --------------- | ---------------------- |
| ⚛️ React        | Основной фреймворк     |
| 🗂️ LocalStorage | Хранение данных        |
| 💅 CSS          | Стилизация интерфейса  |
| 🧱 Vite         | Быстрая сборка проекта |
| 🎨 React Icons  | Иконки для UI          |

---

## 📁 Структура проекта

```
src/
┣ 📂components/
┃ ┣ 📂Form/
┃ ┃ ┣ 📂BtnArea/
┃ ┃ ┣ 📂TodoBtn/
┃ ┃ ┣ 📂TodoInputTitle/
┃ ┃ ┣ 📂TodoInputDescription/
┃ ┃ ┗ 📂TodoList/
┃ ┣ 📂Clock/
┃ ┣ 📂ThemeToggle/
┃ ┗ 📂Title/
┣ 📜App.jsx
┣ 📜App.css
┗ 📜main.jsx
```

---

## 🖥️ Компоненты

- **`App.jsx`** — основной контейнер приложения, включает шапку с часами и переключателем темы, заголовок и форму задач.
- **`Title.jsx`** — красивый заголовок приложения с анимацией.
- **`TodoForm.jsx`** — форма добавления, редактирования и отображения задач.
- **`TodoInputTitle` / `TodoInputDescription`** — контролы ввода с подсчетом символов.
- **`TodoBtn`** — кнопка добавления задач.
- **`BtnArea`** — переключение между активными и завершёнными задачами.
- **`TodoList`** — список задач с возможностью редактирования, удаления и завершения.
- **`Clock`** — отображение текущего времени и даты с мигающими двоеточиями.
- **`ThemeToggle`** — переключение между светлой и тёмной темой.

## 💡 Планы по развитию

- 🔍 Поиск и фильтрация задач
- 🗂️ Категории и приоритеты
- 📱 Поддержка **PWA** (офлайн-режим)
- ☁️ Авторизация и синхронизация с backend (**Node.js + MongoDB**)
- 🎯 Drag & Drop сортировка задач

---

## 📸 Скриншот интерфейса

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/1.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
 <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/2.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
 <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/3.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
 <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/4.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
 <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/5.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
 <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/6.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>
  <img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/MyTodos/7.jpg"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

 <hr/>

---

## ⚙️ Установка и запуск

```bash
# Клонируем репозиторий
git clone https://github.com/skarb-by/My-Todos

# Переходим в папку проекта
cd todo-app

# Устанавливаем зависимости
npm install

# Запуск в режиме разработки
npm run dev
```

---

👨‍💻 **Автор:** [Skarb](https://github.com/skarb-by)
📅 _2025_
