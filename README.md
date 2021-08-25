Deployed on Heroku at https://bw-african-marketplace-backend.herokuapp.com/

| Endpoint | params | input | output | requires Auth token |
| -------- | ------ | ----- | ------ | ------------------- |
| [POST] /api/users/register | none | username, password | user's data | Nope |
| [POST] /api/users/login | none | username, token | message, token | Nope |
| [GET] /api/users | none | no | all users usernames and user_id's | yes |
| [GET] /api/users/:id | id | no | all users usernames and user_id's | yes |
| [POST] /api/business | none | name, token | business_id, name, user_id | yes |

