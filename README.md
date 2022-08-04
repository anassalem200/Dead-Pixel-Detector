# Dead-Pixel-Detector
###### Dead Pixel Detector is a single-page app hosted on **AWS Cloud serverless** technology, the app uses **S3 Static webhosting** to host the frontend, it multiple services using **CloudFront** as edge compute to reach out to users with minimal latency, **Lambda** function is used to wrap request with secure layer, and a **Route 53** Domain DNS for cloudfront to serve 

# Architecture and Components
- S3 Bucket
- Lambda Function
- Cloudfront
- Cloudformation
- Route53

![Source: AWS](Misc/cloudfront-secure-static-website-overview.png)

# Folder Structure
```
C:.
│   README.md
│
├───Misc
│       2022-08-02 23-11-58.mp4
│       cloudfront-secure-static-website-overview.png
│       fine.png
│       mbl.png
│       Rev2 Website.mp4
│       Revision 1.docx
│
├───Src
│       index.css
│       index.html
│       index.js
│
└───Templates
        LaunchACMCert.yaml
```

- Misc/ for documentaion and images
- Src/ app frontend source code
- Templates/ cloudformation templates used

#