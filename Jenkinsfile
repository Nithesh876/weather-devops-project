pipeline {

    agent any

    stages {

        stage('Check Docker') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                bat 'docker-compose down || exit 0'
            }
        }

        stage('Build Containers') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
}