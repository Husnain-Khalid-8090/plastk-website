# Plastk Main Website

> For Public Access

### Task List

- [x] Coming Soon Page
  - [x] Api Form Submittion
  - [x] Share Widget
- [x] Landing Page
- [ ] Application
  - [x] Personal Information Form
  - [x] Employment Information Form
  - [x] Income Information Form
  - [ ] Text Message Validation
  - [ ] Success Screen
  - [ ] Complete Form Submition

### Coming Soon

```seq
Coming Soon->Referral Page: View total referrals\n Views Share Links
```

### Application Form

```seq
Application Form->Step 1: Selection of any button
Step 1->Step 2: Lets Build Something Great Together
Step 2->>Step 1: Back
Step 2->Step 3: Personal Information
Step 3->>Step 2: Back
Step 3->Step 4: Employment Information
Step 4->>Step 3: Back
Step 4->Step 5: Text Validation
Step 5->Step 6: Success Screen
```

DOCKER SETUP:

# docker-compose up -d --build

# docker build -f Dockerfile.prod -t frontend:prod

# docker run -it --rm -p 1337:80 frontend:prod
