# Warp Contracts JWT verify plugin

This plugin attaches the `.verify()` function from the `jsonwebtoken` library to the `SmartWeave` global object.

## Installation
```javascript
npm i @othent/warp-contracts-plugin-jwt-verify
```

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

## Contact
If you have any questions or issues with the Othent Library, please contact us at hello@othent.io or open an issue in the GitHub repository.

## License
The Othent Library is licensed under the MIT License. Please see the LICENSE file for more information.