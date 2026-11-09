pipeline {
  agent any
  environment {
    IMAGE_NAME = 'devops-capstone-app'
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install and Test') {
      steps {
        dir('app') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }
    stage('Docker Build') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ./app"
      }
    }
  }
  post {
    always { echo 'Pipeline finished. Review the test and build results.' }
  }
}
