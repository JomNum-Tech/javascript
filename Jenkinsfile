pipeline {
    agent any

    // triggers {
    //     githubPush()
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Install Trivy') {
            steps {
                sh '''
                sudo apt-get install wget -y
                wget https://github.com/aquasecurity/trivy/releases/latest/download/trivy_0.34.0_Linux-64bit.deb
                sudo dpkg -i trivy_0.34.0_Linux-64bit.deb
                '''
            }
        }

        stage('Scan with Trivy') {
            steps {
                sh 'trivy fs .'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}