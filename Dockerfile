pipeline {
    agent any
    tools { nodejs "NodeJs" }
    stages {
        stage('Git'){
            steps {
                git branch: 'feature/lighthouse', url: 'https://github.com/CarlosVMPE/reto_fe_todo_list'
            }
        }

        stage('Install'){
            steps { sh 'npm install' }
        }

        stage('Test'){
            steps { sh 'npm run test --watch=false' }
        }

        stage('Build'){
            steps { sh 'npm run build --optimization --build-optimizer' }
        }

        stage('Deploy'){
          steps{ sh 'mv dist/reto-fe/* /docs' }
        }
    }
}
