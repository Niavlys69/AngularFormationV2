import { PrestationModule } from './prestation.module';

describe('PrestationModule', () => {
  let prestationModule: PrestationModule;

  beforeEach(() => {
    prestationModule = new PrestationModule();
  });

  it('should create an instance', () => {
    expect(prestationModule).toBeTruthy();
  });
});
