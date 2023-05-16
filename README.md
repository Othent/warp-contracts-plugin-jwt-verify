# Warp Contracts JWT verify plugin

This plugin attaches the `.verify()` function from the `jsonwebtoken` library to the `SmartWeave` global object.

## Installation
```javascript
npm i @othent/warp-contracts-plugin-jwt-verify
```

## Usage

It can be then used inside the contract like this:
```javascript
const verify = new SmartWeave.extensions.verify();
```

It can be then used in deployment like this:
```javascript
import { WarpFactory } from 'warp-contracts';
import { DeployPlugin, ArweaveSigner } from 'warp-contracts-plugin-deploy';
import { JWTVerifyPlugin } from '@othent/warp-contracts-plugin-jwt-verify';

const warp = WarpFactory.forMainnet().use(new DeployPlugin()).use(new JWTVerifyPlugin());
```
Requires warp-contract SDK ver. min. 1.2.18.