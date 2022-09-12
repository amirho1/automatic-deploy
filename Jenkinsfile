pipeline {
  agent any 
  environment {
    NEW_VERSION = "1.3.0"
    SERVER_CREDENTIAL = credentials("server-credential")
  }
  
  stages {
    stage("test") {
      steps {
        echo "Hello Test ${NEW_VERSION}"
      }
    }

    stage("new_stage") {
      steps {
        echo "Added new stage ${JAVA_HOME}"
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