pipeline {
  agent any 
  environment {
    NEW_VERSION = "1.3.0"
  }

   tools {nodejs "node"}
  
  stages {
    stage("test") {
      steps {
        sh 'yarn install'
        sh 'yarn test'
        echo "testing with yarn"
      }
    }

    stage("build") {
      when {
        expression {
          BRANCH_NAME == "main" 
        }
      }
      steps {
        echo "hello Build"
      }
    }

    stage("deploy") {
      steps {
        echo "Hello Deploy"
      }
    }
  }
}