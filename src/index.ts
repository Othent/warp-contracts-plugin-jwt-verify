import { WarpPlugin, WarpPluginType } from 'warp-contracts';
import { verify } from 'jsonwebtoken';

export class JWTVerifyPlugin implements WarpPlugin<any, void> {
  process(input: any): void {
    input.verify = verify;
  }

  type(): WarpPluginType {
    return 'smartweave-extension-jwt-verify';
  }
}
