
  

## **1. Документация API**

API предоставляет методы для управления:

-  **Типами устройств (`DevicesType`)** – CRUD операции для управления типами устройств.

-  **Уведомлениями (`Notification`)** – работа с уведомлениями пользователей.

-  **Правилами инспекций (`InspectionsRule`)** – настройка правил инспекций.

-  **Пользователями (`User`)** – учетные записи пользователей.

### **Используемые методы**

-  `GET` — получение списка или конкретного ресурса.

-  `POST` — создание нового ресурса.

-  `PUT` — обновление существующего ресурса.

-  `DELETE` — удаление ресурса.

---

# **1.1. Типы устройств (`DevicesType`)**

### **1.1.1. Получение списка типов устройств**

#### `GET /api/devices-types`

**Описание:** Возвращает список всех типов устройств.

**Параметры запроса:** отсутствуют.

**Пример запроса:**

#### `GET /api/devices-types`

**Пример ответа (200 OK):**

```json

[

{

"id": "550e8400-e29b-41d4-a716-446655440000",

"name": "Смартфоны"

},

{

"id": "550e8400-e29b-41d4-a716-446655440001",

"name": "Ноутбуки"

}

]

```

---

### **1.1.2. Получение информации о конкретном типе устройства**

#### `GET /api/devices-types/{id}`

**Описание:** Возвращает информацию о конкретном типе устройства.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

GET /api/devices-types/550e8400-e29b-41d4-a716-446655440000

```

**Пример ответа (200 OK):**

```json

{

"id": "550e8400-e29b-41d4-a716-446655440000",

"name": "Смартфоны"

}

```

---

### **1.1.3. Создание нового типа устройства**

#### `POST /api/devices-types`

**Описание:** Создает новый тип устройства.

**Тело запроса:**

`name` - `string` - название типа устройств.

**Пример запроса:**

```http

POST /api/devices-types

Content-Type: application/json

{

"name": "Планшеты"

}

```

**Пример ответа (201 Created):**

```json

{

"id": "550e8400-e29b-41d4-a716-446655440002",

"name": "Планшеты"

}

```

---

### **1.1.4. Обновление существующего типа устройства**

#### `PUT /api/devices-types/{id}`

**Описание:** Обновляет существюущий тип устройства.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Тело запроса:**

`name` - `string` - название типа устройств.

**Пример запроса:**

```http

PUT /api/devices-types/5bf10db7-0f02-4329-b7dc-f0c77a2b5df4

Content-Type: application/json

{

"name": "Смартфоны"

}

```

**Пример ответа (200 OK):**

```json

{

"id": "5bf10db7-0f02-4329-b7dc-f0c77a2b5df4",

"name": "Смартфоны"

}

```

---

### **1.1.5. Удаление существующего типа устройства**

#### `DELETE /api/devices-types/{id}`

**Описание:** Удаляет существюущий тип устройства.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

DELETE /api/devices-types/5bf10db7-0f02-4329-b7dc-f0c77a2b5df4

Content-Type: application/json

```

**Пример ответа (200 OK):**

```json

{

"raw": [],

"affected": 1

}

```

---

# **1.2. Уведомления (`Notification`)**

### **1.2.1. Получение списка уведомлений**

#### `GET /api/notifications`

**Описание:** Возвращает список всех уведомлений.

**Параметры запроса:** отсутствуют.

**Пример запроса:**

```http

GET /api/notifications

```

**Пример ответа (200 OK):**

```json

[

{

"id": "550e8400-e29b-41d4-a716-446655440132",

"user_id": "550e8400-e29b-41d4-a716-446655440000",

"message": "Обновите приложение до последней версии.",

"created_at": "2024-02-12T12:00:00Z"

}

]

```

---

### **1.2.2. Получение конкретного уведомления**

#### `GET /api/notifications/{id}`

**Описание:** Возвращает уведомление по ID.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

GET /api/notifications/550e8400-e29b-41d4-a716-446655440132

```

**Пример ответа (200 OK):**

```json

{

"id": "550e8400-e29b-41d4-a716-446655440132",

"message": "Новое обновление!",

"created_at": "2024-02-12T12:00:00Z"

"updated_at":  "2024-02-12T12:00:00Z"

}

```

---

### **1.2.3. Создание нового уведомления**

#### `POST /api/notifications`

**Описание:** Создает новое уведомление.

**Тело запроса:**

`message` - `string` - текст уведомления.

**Пример запроса:**

```http

POST /api/notifications

Content-Type: application/json

{

"message": "обновление системы"

}

```

**Пример ответа (201 Created):**

```json

{

"message": "Обновление системы",

"user": {

"id": "4a64cdf7-58e4-41b4-88f0-9a754b62bafd"

},

"id": "b26e739b-e02b-475e-9ee4-37cbd7e287ee",

"sentDate": "2025-02-12T08:31:05.392Z",

"createdAt": "2025-02-12T08:31:05.392Z",

"updatedAt": "2025-02-12T08:31:05.392Z"

}

```

---

### **1.2.4. Обновление существующего уведомления**

#### `PUT /api/notifications/{id}`

**Описание:** Обновляет существюущее уведомление.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Тело запроса:**

`message` - `string` - текст уведомления.

**Пример запроса:**

```http

PUT /api/notifications/b26e739b-e02b-475e-9ee4-37cbd7e287ee

Content-Type: application/json

{

"message": "Обновление системы!"

}

```

**Пример ответа (200 OK):**

```json

{

"id": "b26e739b-e02b-475e-9ee4-37cbd7e287ee",

"message": "Обновление системы!",

"sentDate": "2025-02-12T08:31:05.392Z",

"createdAt": "2025-02-12T08:31:05.392Z",

"updatedAt": "2025-02-12T09:17:19.865Z"

}

```

---

### **1.2.5. Удаление существующего уведомления**

#### `DELETE /api/notifications/{id}`

**Описание:** Удаляет существующее уведомление.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

DELETE /api/notifications/b26e739b-e02b-475e-9ee4-37cbd7e287ee

Content-Type: application/json

```

**Пример ответа (200 OK):**

```json

{

"raw": [],

"affected": 1

}

```

---

# **1.3. Правила инспекций (`InspectionsRule`)**

### **1.3.1. Получение списка правил инспекций**

#### `GET /api/inspections-rules`

**Описание:** Возвращает список всех правил проверки устройств.

**Параметры запроса:** отсутствуют.

**Пример запроса:**

```http

GET /api/inspections-rules

```

**Пример ответа (200 OK):**

```json

[

{

"id": "bf061292-8bf5-43c4-b7ee-7fa7a6e75909",

"description": "Потертести минус 5%"

}

]

```

---

### **1.3.2. Получение конкретного правила инспекции**

#### `GET /api/inspections-rules/{id}`

**Описание:** Возвращает правило проверки по ID.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

GET /api/inspections-rules/bf061292-8bf5-43c4-b7ee-7fa7a6e75909

```

**Пример ответа (200 OK):**

```json

{

"id": "bf061292-8bf5-43c4-b7ee-7fa7a6e75909",

"description": "Потертости минус 5%"

}

```

---

### **1.3.3. Создание нового правила инспекции**

#### `POST /api/inspections-rules`

**Описание:** Создает новое правило проверки устройств.

**Тело запроса:**

`description` - `string` - текст правила;

`devicesTypeId` - `UUID` - идентификатор типа устройств, к которому применимо правило.

**Пример запроса (201 Created):**

```http

POST /api/inspections-rules

Content-Type: application/json

{

"description": "Потертости минус 5%",

"devicesTypeId":"5bf10db7-0f02-4329-b7dc-f0c77a2b5df4"

}

```

**Пример ответа:**

```json

{

"description": "Потертости минус 5%",

"devicesType": "5bf10db7-0f02-4329-b7dc-f0c77a2b5df4",

"id": "92724201-30d1-44a3-8999-acbcb69d1e18"

}

```

---

### **1.3.4. Обновление существующего правила инспеции**

#### `PUT /api/inspections-rules/{id}`

**Описание:** Обновляет существюущее правило проверки.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Тело запроса:**

`description` - `string` - текст правила.

`devicesTypeId` - `UUID` - идентификатор типа устройств, к которому применимо правило.

**Пример запроса:**

```http

PUT /api/inspections-rules/bf061292-8bf5-43c4-b7ee-7fa7a6e75909

Content-Type: application/json

{

"description": "Потертости минус 15%"

}

```

**Пример ответа (200 OK):**

```json

{

"id": "bf061292-8bf5-43c4-b7ee-7fa7a6e75909",

"description": "Потертости минус 15%"

}

```

---

### **1.3.5. Удаление существующего правила проверки**

#### `DELETE /api/inspections-rules/{id}`

**Описание:** Удаляет существюущее правило проверки.

**Параметры запроса:**

`id` - `UUID` - уникальный идентификатор

**Пример запроса:**

```http

DELETE /api/inspections-rules/bf061292-8bf5-43c4-b7ee-7fa7a6e75909

Content-Type: application/json

```

**Пример ответа (200 OK):**

```json

{

"raw": [],

"affected": 1

}

```

---

# **1.4. Пользователи (`User`)**

### **1.4.1. Регистрация**

#### `POST /api/users/register`

**Описание:** создает нового пользователя.

**Тело запроса:**

`name` - `string` - имя пользователя;

`email` - `string` - электронная почта пользователя;

`password` - `string` - пароль пользователя;

`role` - `string` - роль пользователя.

**Пример запроса (200 OK):**

```http

POST /api/users/register

Content-Type: application/json

{

"name": "Петров Петр",

"email": "petrov@mail.ru",

"password": "12345678",

"role": "admin"

}

```

**Пример ответа:**

```json

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNTc4NTI1LTgyZDUtNGNjYS04YzRhLWI3MGU3MzcwMjgxYyIsImlhdCI6MTczOTM0ODk2MiwiZXhwIjoxNzM5NDM1MzYyfQ.NiFXz7j_xSxKBZxaqh1uZmIdFiuFHNcgfsoAf48fg6U"

}

```

---

### **1.4.2. Вход**

#### `POST /api/users/login`

**Описание:** осуществляет авторизацию пользователя.

**Тело запроса:**

`email` - `string` - электронная почта пользователя;

`password` - `string` - пароль пользователя.

**Пример запроса (200 OK):**

```http

POST /api/users/register

Content-Type: application/json

{

"email": "example@mail.ru",

"password": "12345678"

}

```

**Пример ответа:**

```json

{

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhNjRjZGY3LTU4ZTQtNDFiNC04OGYwLTlhNzU0YjYyYmFmZCIsImlhdCI6MTczOTM0ODk2NiwiZXhwIjoxNzM5NDM1MzY2fQ.Lrg6nflQ9OuxX6KM0O1t73ajQb-RwLO1wBo4ElEy7O4"

}

```

## **2. Скриншоты Postman**

![alt text](image.png)

![alt text](image-5.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-6.png)

![alt text](image-4.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)