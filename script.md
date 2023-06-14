#### Run app

```
amplify init --app https://github.com/PhamTHHanh/VideoPlatform.git 
```

#### Authentication


```
amplify add auth or amplify update auth
```

? Do you want to use the default authentication and security configuration? 
    `Default configuration with Social Provider (Federation)`
? How do you want users to be able to sign in? 
    `Username`
? Do you want to configure advanced settings? 
    `No, I am done.`
? What domain name prefix you want us to create for you? 
    `(default)`
? Enter your redirect signin URI: 
    `http://localhost:3000/`
? Do you want to add another redirect signin URI 
    `No`
? Enter your redirect signout URI: 
    `http://localhost:3000/`
? Do you want to add another redirect signout URI 
    `No`
? Select the social providers you want to configure for your user pool: 
    `<choose your provider and follow the prompts to input the proper tokens>`


#### Push

```
amplify push
```

#### Front end

```
yarn start
```