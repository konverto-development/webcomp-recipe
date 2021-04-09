pipeline {
	agent {
		dockerfile {
			filename 'infrastructure/docker/node.dockerfile'
			additionalBuildArgs '--build-arg JENKINS_USER_ID=$(id -u jenkins) --build-arg JENKINS_GROUP_ID=$(id -g jenkins)'
		}
	}
	options {
		ansiColor('xterm')
	}
	stages {
		stage('Dependencies') {
			steps {
				sh 'npm ci'
			}
		}
		stage('Test') {
			steps {
				sh '''
					npm run lint
				'''
			}
		}
		stage('Build') {
			steps {
				sh 'npm run build'
			}
		}
	}
}