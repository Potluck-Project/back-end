
## Potluck API Reference

#### User Register

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |
| `email` | `string` | **Required**. User email |

---------------------------------------------------------

#### User Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |

---------------------------------------------------------

#### Get all Users

```http
  GET /api/user/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get User by ID

```http
  GET /api/user/:user_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Add User to Event

```http
  POST /api/user/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Attendee Confirm Event

```http
  POST /api/user/:attendees_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------
  
#### Get all Events

```http
  GET /api/event
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get event by ID

```http
  GET /api/event/:event_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Delete event by ID

```http
  DELETE /api/event/:event_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Post new Event

```http
  POST /api/event/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Update Event

```http
  PUT /api/event/:event_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Update Event

```http
  PUT /api/event/:event_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get all Items

```http
  GET /api/item
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get Item by ID

```http
  GET /api/item/:item_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get All Items
```http
  GET /api/item
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Get by Item ID
```http
  GET /api/item/:item_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Post new Item to Item Table
```http
  POST /api/item
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Post item from item table into Event table
```http
  POST /api/item/:event_id/:item_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------

#### Delete item from Event table
```http
  POST /api/item/:event_id/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Your Authorization |

---------------------------------------------------------