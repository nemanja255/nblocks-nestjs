import { PlatformClient } from '@nebulr-group/nblocks-ts-client';
import { Stage } from '@nebulr-group/nblocks-ts-client/dist/platform/platform-client';
import { Injectable } from '@nestjs/common';
import { ENVIRONMENT } from '../../nebulr/nebulr-config/nebulr-config.module';
import { NebulrConfigService } from '../../nebulr/nebulr-config/nebulr-config.service';

@Injectable()
export class ClientService {

    /** A ready made client instance loaded with your credentials */
    readonly client: PlatformClient;

    constructor(private readonly nebulrConfigService: NebulrConfigService) {
        this.client = new PlatformClient(
            nebulrConfigService.getNebulrPlatformApiKey(),
            1,
            process.env.NBLOCKS_DEBUG === '*' ? true : false,
            this.getEnvironment(nebulrConfigService)
        );
    }

    getEnvironment(nebulrConfigService: NebulrConfigService): Stage {
        switch (nebulrConfigService.getEnvironment()) {
            case ENVIRONMENT.DEV:
                return process.env.NBLOCKS_FORCE_DEV ? 'DEV' : 'STAGE';

            default:
                return 'PROD';
        }
    }
}
