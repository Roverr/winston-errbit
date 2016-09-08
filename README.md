# winston-errbit-v2
Errbit winston transporter for using the v2 API of Errbit.

## How to use
Super duper easy.
```
import winston from 'winston';

import { ErrbitLogger } from 'winston-errbit-v2';
import { config } from 'your-config';

export function errbitInit() {
  const options = {
    key: config.errbit.key,
    host: config.errbit.url,
    env: config.env,
  };
  winston.add(ErrbitLogger, options)
}
```

## Maintaining and information
I created this npm package because I had to use it in one of my projects. Since the errbit was kinda legacy we used, I had to make a really simple transporter for it.

At the moment I am really busy with my work, however, I might take my time and make this transporter for every API version of errbit.

But it might not happen until 2016, December.
