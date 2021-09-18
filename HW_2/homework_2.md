# Homework for Postman. Part 2

## Task 1
Необходимо залогиниться. 
http://162.55.220.72:5005/login  
POST  
login: str (кроме /)  
password: str  
Приходящий токен необходимо передать во все остальные запросы.  
**Дальше все запросы требуют наличие токена.**

## Task 2
http://162.55.220.72:5005/user_info  
req. (RAW JSON)  
POST  
age: int  
salary: int  
name: str  
auth_token  
**Responce:**
```sh
{
    "start_qa_salary": salary,
    "qa_salary_after_6_months": salary * 2,
    "qa_salary_after_12_months": salary * 2.9,
    "person": {
        "u_name": [
            user_name, 
            salary, 
            age
        ],
        "u_age": age,
        "u_salary_1.5_year": salary * 4
    }
}
```
**Тесты:**
1. Статус код 200.
2. Проверка структуры json в ответе.
3. В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
4. Достать значение из поля "u_salary_1_5_year" и передать в поле "salary" запроса http://162.55.220.72:5005/get_test_user.

## Task 3
http://162.55.220.72:5005/new_data  
req.  
POST  
age: int  
salary: int  
name: str  
auth_token  
**Responce:**
```sh
{
    "name": name,
    "age": int(age),
    "salary": [
        salary, 
        str(salary * 2), 
        str(salary * 3)
    ]
}
```
**Тесты:**
1. Статус код 200.
2. Проверка структуры json в ответе.
3. В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
4. Проверить, что 2-ой элемент массива salary больше 1-го и 0-го.

## Task 4
http://162.55.220.72:5005/test_pet_info  
req.  
POST  
age: int  
weight: int  
name: str  
auth_token  
**Responce:**
```sh
{
    "name": name,
    "age": age,
    "daily_food": weight * 0.012,
    "daily_sleep": weight * 2.5
}
```
**Тесты:**
1. Статус код 200.
2. Проверка структуры json в ответе.
3. В ответе указаны коэффициенты умножения weight, напишите тесты по проверке правильности результата перемножения на коэффициент.

## Task 5
http://162.55.220.72:5005/get_test_user  
req.  
POST  
age: int  
salary: int  
name: str  
auth_token  
**Responce:**
```sh
{
    "name": name,
    "age": age,
    "salary": salary,
    "family": {
        "children": [
            [
                "Alex", 
                24
            ],
            [
                "Kate", 
                12
            ]
        ],
        "u_salary_1.5_year": salary * 4
    }
}
```
**Тесты:**
1. Статус код 200.
2. Проверка структуры json в ответе.
3. Проверить, что значение поля name равно значению переменной name из окружения.
4. Проверить, что значение поля age в ответе соответствует отправленному в запросе значению поля age.

## Task 6
http://162.55.220.72:5005/currency  
req.  
POST  
auth_token  
**Responce:**
```sh
[
    {
        "Cur_Abbreviation": str,
        "Cur_ID": int,
        "Cur_Name": str
    }
…
    {
        "Cur_Abbreviation": str,
        "Cur_ID": int,
        "Cur_Name": str
    }
]
```
**Тесты:**
1. Можете взять любой объект из присланного списка, используйте JS random. В объекте возьмите Cur_ID и передайте через окружение в следующий запрос.

## Task 7
http://162.55.220.72:5005/curr_byn  
req.  
POST  
auth_token  
curr_code: int  
**Responce:**
```sh
{
    "Cur_Abbreviation": str,
    "Cur_ID": int,
    "Cur_Name": str,
    "Cur_OfficialRate": float,
    "Cur_Scale": int,
    "Date": str
}
```
**Тесты:**
1. Статус код 200.
2. Проверка структуры json в ответе.