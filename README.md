## LINK HEROKU

[Link deploy heroku](https://hafidh-h8-finalproject-2.herokuapp.com/)

```bash
# klik link above or copy link below
https://hafidh-h8-finalproject-2.herokuapp.com/
```

## POSTMAN

[Link to import postman](https://www.getpostman.com/collections/6ed0d5bace2b72a155a7)

```bash
# klik link above or copy link below
https://www.getpostman.com/collections/6ed0d5bace2b72a155a7
```

## HOW TO CHECK & SET REMOTE GITHUB ?

```bash
$ git remote -v
# or
$ git remote set-url <remote_name> <remote_url> (ex : git remote set-url origin https://github.com/hafidh2001/Hactiv8_Final_Project-2.git)
```

## HOW TO REMOVE REMOTE GITHUB ?

```bash
$ git remote remove <remote_name> (ex : git remote remove origin)
```

## HOW TO CLONE REPOSITORY ?

```bash
$ git clone <remote_repo> (ex: git clone https://github.com/hafidh2001/Hactiv8_Final_Project-2.git)
# or clones to specific branches
$ git clone -b <branch> <remote_repo> (ex: git clone -b development https://github.com/hafidh2001/Hactiv8_Final_Project-2.git)
```

## HOW TO RUN PROGRAM IN THIS PROJECT ?

```bash
# SETUP ENVIRONMENT

# step 1 : install all dependencies && dev-dependencies
$ npm install (to install dependencies on the project stored in package.json)
# step 2 : create .env file and duplicates the contents of the .env.example
$ touch .env 
# step 3 : create db in database and write the url in .env
$ DATABASE_URL=postgres://{user}:{password}@{hostname}:{port}/{database-name}
# step 4 : migrate db using script in package.json
$ npm run migrate-create

##########################################################################################

# RUN

# step : running port development
$ npm run dev
```

## DOCUMENTATION

[See more documentation here](./note.txt)\
[See documentation for deploy with Heroku](./note-deploy.txt)

## License

[MIT LICENSE](./LICENSE)

© Developed by [hafidh2001](https://github.com/hafidh2001)
