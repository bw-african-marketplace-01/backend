Deployed on Heroku at https://bw-african-marketplace-backend.herokuapp.com/

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |
| [POST] /api/users/register | none | username, password | user's data | Nope |
| [POST] /api/users/login | none | username, token | message, token | Nope |
| [GET] /api/users | none | no | array -> username, user_id | yes |
| [GET] /api/users/:id | id | no | username, user_id | yes |
| [POST] /api/business | none | name, owner_id | name, owner_id, business_id | yes |

