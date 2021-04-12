pipeline {
  agent none
  environment {
    CI = ''
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('build') {
      agent {
        docker { image 'node:lts-alpine3.10'}
      }
      steps {
        sh 'npm i'
        sh 'npm run build'
      }
    }

    stage ('image') {
      agent any
      steps {
        sh 'docker build . -t jwilson717/test:expenser-front-image'
      }
    }
   }
}   