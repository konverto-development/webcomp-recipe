pipeline {
    agent {
        docker {
			image '755952719952.dkr.ecr.eu-west-1.amazonaws.com/webcompbuild:latest'
		}
    }
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Prepare') {
            steps {
                sh '''
					cp /webcompbuild/.env .env
                    rm -rf $(jq -r ".dist.basePath" wcs-manifest.json)
                '''
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
		stage('Deploy to Test Store') {
			steps {
				sshagent (credentials: ['tomcatkey', 'jenkins_github_ssh_key']) {
					sh '''
						WHEN=$(date "+%Y%m%dT%H%M")
						WC_NAME=${GIT_URL##*/}
						WC_NAME=${WC_NAME%.git}
						/webcompbuild/wcstorecli.sh -d "${WC_NAME}" "${BRANCH_NAME}-${BUILD_NUMBER}-${WHEN}"
					'''
				}
			}
		}
    }
}
