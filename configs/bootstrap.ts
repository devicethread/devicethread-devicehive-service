import { join } from 'path'
import { print } from './utils'
import dotenv from 'dotenv'
import { ENVS } from './constants/envs';

// "before" will trigger before the app lift.
export const bootstrapBefore = (): object => {
  // solve ncc path link.
  const nodeEnv = process.env.NODE_ENV;
  const envPath = join(__dirname, '../envs/.env.'.concat(nodeEnv || ENVS.DEVELOPMENT.toLowerCase()).trim());
  const result = dotenv.config({path: envPath})
  if (result.error) {
    print.danger(`Environment variable not loaded: not found ${envPath} file.`)
    return {}
  }
  print.log('.env loaded.')
  return result.parsed
}

// "after" will trigger after the "container" mounted..
export const bootstrapAfter = (): any => {}
