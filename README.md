# Course Title: Cloud Computing | Course Code: CSE472/ CSC472 
## Group: A3 (Summer 2023)
## Secure Cloud Network Architecture for Multi-Tier Application <br/>

## Project Overview
In today's digital era, businesses increasingly rely on cloud-based solutions to host their applications and services. However, maintaining a robust network architecture and ensuring the data security of these cloud-based multi-tier applications remains a significant challenge. This project proposes to provide services as a cloud service provider in Bangladesh. In this project, we will focus on developing a network with AWS services for an organization (as per their requirements manually). Other than that, we plan on an automatic service for future work so that organizations and business owners can quickly deploy their web server, streaming server, etc. with proper data security and network segmentation.

## Our Network Layout
A Virtual Private Computing (VPC) with 2 private and 2 public subnets, 1 NAT gateway, 1 internet gateway, and 2 route tables is created to provide a secure network infrastructure. Additionally, we'll create EC2 instances inside that VPC. There will be two instances in the public subnet, one of which may be a web server and the other of which could be a bastion server for secure access. For increased security, an EC2 instance for the database will be set up in the private subnet. If a need arises in the future, the one private subnet that is left can be used to build a database replica.

## Prerequisites
Before you begin, make sure to ensure you have an active AWS account. Please refer to the official documentation to do so.
1. AWS IAM account with policies attached for creating a VPC.
2. Basic knowledge about AWS services especially VPC, IP Subnetting, and EC2.
> Click here to [Create an Account](https://portal.aws.amazon.com/billing/signup?type=enterprise#/start/email) or [Sign Up](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_eu-north-1_78c76af3d4f69592&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=eWFuKPs7Ux0XdqRNBoePOxDRM9L7BsolEYO-M6NZ6PE&code_challenge_method=SHA-256).

## Project Architecture
![Flow Chart](https://github.com/mahbublimon/A3_Summer_2023/assets/66026612/9ff7f543-2d62-48d2-94e3-0931de3f464a)

## Resources Used in This Project
- Virtual Private Cloud (VPC)
- Application Load Balancer (ALB)
- EC2 Instances
- Auto Scaling Group (ASG)
- CloudWatch

A highly available, scalable, and secure web hosting environment is established by the collaboration of several crucial AWS services. The architecture ensures optimum speed and dependable operation for hosting the website on AWS with automatic scaling and redundancy across various Availability Zones (AZ).

## Report
- [Project Proposal](Project_Proposal.pdf)
- [Conference Paper](https://ieeexplore.ieee.org/abstract/document/10441592)

## Contribution
To contribute to <A3_Summer_2023>, follow these steps:
1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name> .`
3. Make your changes and commit them: `git commit -m '<commit_message>' .`
4. Push to the origin branch: `git push origin <A3_Summer_2023>/<location>`
5. Create the pull request.

## Contributors
Thanks to the following people who have contributed to this project: 
* > https://github.com/mahbublimon
* > https://github.com/rudritarahman
* > https://github.com/Protik-Hasan
* > https://github.com/Shatabde
* > https://github.com/sufi-an

## Contact 
* > Kazi Mahbub Morshed Limon (2231316@iub.edu.bd)
* > Rudrita Rahman (2021059@iub.edu.bd)
* > MD. Protik Hasan (2022133@iub.edu.bd)
* > Shatabde Debnath (2020552@iub.edu.bd)
* > MD Abu Sauri Sufian (1930839@iub.edu.bd)

## License
This project uses the following license:
[license_name](license_URL)

## Project status
- [ ] This is a complete project.
- [x] This project is on hold.
- [ ] This is an incomplete project.

# Let's go! Have some coding! 🙂
