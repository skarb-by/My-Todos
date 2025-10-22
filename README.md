# 🧩 Todo App — React + useCallback Optimization

![React](https://img.shields.io/badge/React-18.0+-61dafb?logo=react&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

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
- 🌈 Современный UI с анимацией и плавными эффектами

---

## 🧠 Оптимизация с `useCallback`

В компоненте **`TodoForm`** внедрён `useCallback`, чтобы избежать избыточных перерендеров дочерних компонентов, таких как:

- `TodoBtn`
- `TodoInputTitle`
- `TodoInputDescription`
- `TodoList`

Это позволило:

- 🔹 Повысить отзывчивость интерфейса
- 🔹 Уменьшить нагрузку на рендер
- 🔹 Улучшить стабильность при росте количества задач

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
 ┃ ┗ 📂Title/
 ┣ 📜App.jsx
 ┣ 📜App.css
 ┗ 📜main.jsx
```

---

## 💡 Планы по развитию

- 🔍 Поиск и фильтрация задач
- 🗂️ Категории и приоритеты
- 📱 Поддержка **PWA** (офлайн-режим)
- ☁️ Авторизация и синхронизация с backend (**Node.js + MongoDB**)
- 🎯 Drag & Drop сортировка задач

---

## 📸 Скриншот интерфейса

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

## 📄 Лицензия

Проект распространяется под лицензией **MIT**.
Свободно используйте и улучшайте под свои нужды.

---

👨‍💻 **Автор:** [Skarb](https://github.com/skarb-by)
📅 _2025_
