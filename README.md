This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/bgarreth/NextSSRAmplify)


Based on the Amplify Blog Post https://aws.amazon.com/blogs/mobile/host-a-next-js-ssr-app-with-real-time-data-on-aws-amplify/

To deploy in your AWS account use the one click deploy button or clone the Repository locally

```
git clone https://github.com/<Github-Username>/NextSSRAmplify.git
```
To install the dependencies run
```
npm install
```
To initialize the Amplify backend run

```
amplify init
```
If you deployed directly into your account you can pull the provisioned backend instead

```
amplify pull --appId <Amplify-Console-App-Id> --envName <env-name>
```
To generate the DataStore Models run
```
amplify codegen models
```
For SSR applications you will need to add a backend role to build the backend resources. If not prompted to create a backend role the first deployment will fail and you will need to add the service role and re-deploy the backend role https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html#redeploy-ssg-to-ssr

This application has two routes set up 
1) /posts/{post_id} shows Post object content pulled from the Amplify DataStore
2) /star shows Next star ratings from an external API

A running application can be found here: https://www.srramplify.bgarreth.myinstance.com/

1) Post Route: https://www.srramplify.bgarreth.myinstance.com/posts/p1
2) Stars Route : https://www.srramplify.bgarreth.myinstance.com/star

To create content for Posts you can run a mutation from the AppSync Console of the generated GraphqL API

```
mutation MyMutation {
  createPost(input: {id: "p1", title: "hello world", content: "hello world content"}) {
    id
    title
    content
  }
}
```


