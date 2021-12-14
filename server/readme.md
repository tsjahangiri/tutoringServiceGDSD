## To Run this project follow this steps ->

#### Step 1: Create a data base with this table in it:-
> CREATE TABLE `tutorprofile` (
>   `id` int NOT NULL AUTO_INCREMENT,
>   `first_name` varchar(50) NOT NULL,
>   `last_name` varchar(50) NOT NULL,
>   `subject` varchar(100) NOT NULL,
>   `age` int NOT NULL,
>   `level` varchar(45) DEFAULT NULL,
>   `rate` float DEFAULT NULL,
>   `rating` float DEFAULT NULL,
>   `numOfStudents` int DEFAULT NULL COMMENT '	',
>   PRIMARY KEY (`id`),
>   UNIQUE KEY `id_UNIQUE` (`id`)
> ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#### Step 2: Now populate the .env file with these environment variables: 

> DB_HOST=<host_name>
> DB_USER=<user_name>
> DB_PASS=<db_pass>
> DB_NAME=<db_name>
> SERVER_PORT=<desired-port>

#### step 3: Now run this command from the root folder '../server/<from-here>'

```sh
npm start
```
## End Point:-
- http://<HOST>:<PORT>/api/search/tutor
-- valid query parameters are :
-- subjectname=<string:name of the subject>
--level=<string: masters/bachelor>
--rating=<float: expected rating of the tutor>

##### Example Query:
..
```sh
GET http://localhost:9090/api/search/tutor?subjectname=english&level=bachelor
```
##### It returns an array of objects of matching tutors otherwise returns an empty array -> []

##### The above query has returned this object:-
> [
    {
        "id": 2,
        "first_name": "Rakib",
        "last_name": "Hasan",
        "subject": "English",
        "age": 30,
        "level": "Bachelor",
        "rate": 25,
        "rating": 4.2,
        "numOfStudents": 1000
    }
]
> 
