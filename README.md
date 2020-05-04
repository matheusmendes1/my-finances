# My Finances

Welcome to My Finances! This application will help you to control your expenses, centralizing all debts and payments in one place! So make your registration and enjoy.

## Getting Started

First, you will need to have the node and yarn installed on your machine. As a prerequisite, you must enter the 'desktop' and 'server' folders and execute the command "yarn" in your terminal, so that the dependencies are installed

### Prerequisites

Here are the software that will be needed for the application

* Nodejs: https://nodejs.org/en/
* Yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable
* Docker: https://docs.docker.com/docker-for-windows/install/
* Insomnia Core: https://insomnia.rest/download/#windows
* DBeaver: https://dbeaver.io/download/

### Instalations 

#### Docker

* Run 'docker run —name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres' on terminal to create a postgres image

##### Considerations about Docker

* docker ps: shows the containers that are running
* docker ps -a: list all available containers
* After the docker / machine is turned off, the container turns off
  * To run the container again, use docker start <container_id | container_name>

#### DBeaver

*. Inside Dbeaver, click on "new connection"
  * Host: localhost
  * Port: 5432 (same as the container)
  * Database: postgres (defaul name)
  * Username: same as the container
  * Senha: same as the container
  * Na aba PostgreSQL: check 'show all databases'
* Create a new database to this connection