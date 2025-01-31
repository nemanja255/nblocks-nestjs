import { EMOJIS } from './emojis';

export const MESSAGES = {
  WELCOME: `${EMOJIS.ZAP}${EMOJIS.ZAP} Welcome to Nblocks NPX scripts! ${EMOJIS.ZAP}${EMOJIS.ZAP}`,
  SETUP_START: 'We will setup all dependencies in a few seconds...',
  RUNNING_SETUP: 'Running SETUP...',
  PACKAGE_MANAGER_INSTALLATION_IN_PROGRESS: `Adding required dependencies... ${EMOJIS.COFFEE}`,
  CREATE_APP_INSTRUCTION: '\n- Now you can create your brand new own Nblocks App and get the new credentials. \n- Or you can choose to use our Demo Nblocks App playground which is shared accross all testers.',
  PACKAGE_MANAGER_INSTALLATION_FAILED: `${EMOJIS.SCREAM} Packages installation failed, see above`,
  PACKAGE_MANAGER_INSTALLATION_EMAIL_SENT: (email: string) => `\nYour app was created ${EMOJIS.SUNGLASSES}`,
  PACKAGE_MANAGER_INSTALLATION_SUCCEED: `\n${EMOJIS.ROCKET} That\'s all! \n${EMOJIS.PRAY} Thanks for installing Nblocks! \n\n You are now set up, supercharged and ready to power your app with all that we have to offer. Enjoy prebuilt frontend views and full functionality for: \n-> Tenancy\n-> Register & onboarding\n-> Login\n-> Access control\n-> User management\n-> Checkout and billing\n\nDon't forget to join our Discord for the latest announcements and updates.\n${EMOJIS.POINT_RIGHT}Get back to the backend installation part of the Quick start: `,
  QUICKSTART_LINK_IMPORT_THE_MODULE: '> https://nebulr-group.github.io/nblocks-docs/docs/quickstart#backend',
  PACKAGE_MANAGER_INSTALLATION_ERROR: (error: string) =>
    `\nOh oh! ${error}\nExiting...`,
  DIR_EXIST_MESSAGE: (directory: string) =>
    `Directory ${directory} already exists. This project has probably already been setup!`,
  ENV_FILE_UPDATED: (fileName: string) => `\nUPDATED: Env file ${fileName}\n`,
  CREATING_APP: `Creating your Nblocks app... ${EMOJIS.COFFEE}`,
  DOWNLOADING_CONFIG: `Downloading Nblocks app configuration..." ${EMOJIS.COFFEE}`,
};
