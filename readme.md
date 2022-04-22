## GoIT Node.js Course Template Homework

Выполните форк этого репозитория для выполнения домашних заданий (2-6) Форк
создаст репозиторий на вашем http://github.com

Добавьте ментора в коллаборацию

Для каждой домашней работы создавайте свою ветку.

- hw02
- hw03
- hw04
- hw05
- hw06

Каждая новая ветка для дз должна делаться с master

После того как вы закончили выполнять домашнее задание в своей ветке, необходимо
сделать пулл-реквест (PR). Потом добавить ментора для ревью кода. Только после
того как ментор заапрувит PR, вы можете выполнить мердж ветки с домашним
заданием в мастер.

Внимательно читайте комментарии ментора. Исправьте замечания и сделайте коммит в
ветке с домашним заданием. Изменения подтянуться в PR автоматически после того
как вы отправите коммит с исправлениями на github После исправления снова
добавьте ментора на ревью кода.

- При сдаче домашней работы есть ссылка на PR
- JS-код чистый и понятный, для форматирования используется Prettier

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо
  выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими
  исправлениями простых ошибок

## Routes:

### Contacts:

#### GET --- Get All contacts.

- http://localhost:8083/api/contacts/--- Without Docker.
- http://localhost/api/contacts/--- With Docker.

#### GET --- Get contact by id ID.

- http://localhost:8083/api/contacts/:contactId--- Without Docker.
- http://localhost/api/contacts/:contactId--- With Docker.

#### POST --- Add new contact.

- http://localhost:8083/api/contacts/--- Without Docker.
- http://localhost/api/contacts/--- With Docker.

#### DELETE --- Remove contact by ID.

- http://localhost:8083/api/contacts/:contactId--- Without Docker.
- http://localhost/api/contacts/:contactId--- With Docker.

#### PUT --- Update contact by ID.

- http://localhost:8083/api/contacts/:contactId--- Without Docker.
- http://localhost/api/contacts/:contactId--- With Docker.

#### PATCH --- Update status "favorite" of contact by ID.

- http://localhost:8083/api/contacts/:contactId/favorite --- Without Docker.
- http://localhost/api/contacts/:contactId/favorite--- With Docker.

### Auth:

#### POST --- User registration.

- http://localhost:8083/api/auth/signup --- Without Docker.
- http://localhost/api/auth/signup --- With Docker.

#### POST --- Login user.

- http://localhost:8083/api/auth/login --- Without Docker.
- http://localhost/api/auth/login --- With Docker.

#### GET --- User logging out.

- http://localhost:8083/api/auth/logout --- Without Docker.
- http://localhost/api/auth/logout --- With Docker.

### Users:

#### GET --- Information about current user.

- http://localhost:8083/api/users/current --- Without Docker.
- http://localhost/api/users/current --- With Docker.

#### PATCH --- Update current avatar.

- http://localhost:8083/api/users/avatars --- Without Docker.
- http://localhost/api/users/avatars --- With Docker.

#### PATCH - http://localhost:8083/api/users/:userId/subscription --- Update the user's "subscription".

- http://localhost:8083/api/users/subscription --- Without Docker.
- http://localhost/api/users/subscription --- With Docker.

#### POST --- Send the verification letter to the specified mail.

- http://localhost:8083/api/users/verify --- Without Docker.
- http://localhost/api/users/verify --- With Docker.

#### GET --- Resend the verification letter to the specified mail.

- http://localhost:8083/api/users/verify/:verificationToken --- Without Docker.
- http://localhost/api/users/verify/:verificationToken --- With Docker.

### Query:

#### GET --- Get All contacts by query.

- http://localhost:8083/api/contacts?query --- Without Docker.
- http://localhost/api/contacts?query --- With Docker.

#### page = number.

- Choose from which page to show users: "page=1"

#### limit = number.

- Select the number of users to display: "limit=10"

#### sortByAsc = tag.

- Sort by "tag" in ascending order: "sortByAsc=phone"

#### sortByDesc = tag.

- Sort by "tag" in descending order: "sortByDesc=phone"

#### filter = tag1|tag2|tag3.

- Sort by "tags": "filter=name|age|date".

#### favorite = bool.

- Filter users by tag "favorite": "favorite=true" || "favorite=false" .

Random query string:
http://localhost:8083/api/contacts?page=2&limit=5&filter=phone|favorite|name|email&favorite=true&sortByDesc=phone
