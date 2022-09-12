pipeline {
  agent any 
  environment {
    NEW_VERSION = "1.3.0"
  }
  
  stages {
    stage("test") {
      steps {
        echo "Hello Test ${NEW_VERSION}"
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