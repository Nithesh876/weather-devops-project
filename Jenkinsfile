pipeline {

    agent any

    stages {

        stage('Build Docker Image') {

            steps {
                bat 'docker build -t weather-app .'
            }
        }

        stage('Stop Old Container') {

            steps {
                bat 'docker stop weather-container || exit 0'
                bat 'docker rm weather-container || exit 0'
            }
        }

        stage('Run Docker Container') {

            steps {
                bat 'docker run -d -p 8081:80 --name weather-container weather-app'
            }
        }
    }
}