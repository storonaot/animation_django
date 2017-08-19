1. Создаем директорию
______________________
mkdir project_name

2. Переходим в директорию
_________________________
cd project_name

3. Создаем виртуальное окружение в текущей папке
_______________________________________________
python3 -m venv .

4. Запускаем виртуальное окружение, в консоли должна появиться приписка (myvenv)
__________________________________
source bin/activate

4*. Выход из виртуального окружения
____________________________________
deactivate

5. Устанавливаем Postgres
_________________________
pip3 install psycopg2

6. Установить Django
____________________
<!-- pip install django==1.8 -->
pip install Django
pip install Django --upgrade

7. Создаем структуру проекта
____________________________
django-admin startproject config .

8. В файле myapp/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'animation_catalog',
        'USER': 'irinazigalova',
        'PASSWORD': 'Durkheim135',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

9. Создаем базу данных в pgAdmin3

<!-- 10. Создаем миграции
python manage.py makemigrations -->

11. Запускаем миграции
python manage.py migrate

12. Синхронизируем базу данных
python manage.py syncdb

13. Создаем суперюзера
python manage.py createsuperuser
name: irinazigalova
password: Durkheim1357

14. Запускаем сервер
python manage.py runserver

15. Заходим в админку
http://127.0.0.1:8000/admin

16. Создаем приложение
python manage.py startapp app

17. Создаем статичные файлы
python manage.py collectstatic


Доп пакеты
pip install Pillow -  для работы с изображениями
pip install django-imagekit ?
pip install django-webpack-loader - подружить django и webpack

Сиды
manage.py loaddata initial_data.json
