Deployed on Heroku at https://bw-african-marketplace-backend.herokuapp.com/

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |
| [POST] /api/users/register | none | username, password | user's data | Nope |
| [POST] /api/users/login | none | username, token | message, token | Nope |
| [GET] /api/users | none | no | array -> username, user_id | yes |
| [GET] /api/users/:id | id | no | username, user_id | yes |
| [POST] /api/business | none | name, owner_id | name, owner_id, business_id | yes |
| [POST] /api/items | none | business_id, category, location, name, description, price | <--- That entire object + item_id | yes |
| [GET] /api/items | none | no | arrays of all items | yes |
| [GET] /api/items/:id | id | no | item object | yes |
