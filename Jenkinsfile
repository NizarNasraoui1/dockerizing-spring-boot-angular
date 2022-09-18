pipeline{
    agent any
    environment {
        DOCKER_PASSWORD='#Nizar122169'
    }
    stages{
        stage('clone repository'){
           steps{
               git credentialsId: '1988714d-310f-41aa-b6e5-44685f1f3053', url: 'git@github.com:NizarNasraoui1/dockerizing-spring-boot-angular.git'
           }
        }
        stage('build images'){
            steps{
                script{
                    sh 'docker build -t nizarnasraoui/apiserver:latest -f back-api.dockerfile .'
                }
            }
        }
        stage('push images to dockerhub'){
            steps{
                script{
                    
                    withCredentials([string(credentialsId: 'dockerhub-password', variable: 'dockerhubPassword')]) {
                    sh 'docker login -u nizarnasraoui -p ${dockerhubPassword}'
}
                    sh 'docker push nizarnasraoui/apiserver:latest'
                }
            }
        }
        
    }
}
