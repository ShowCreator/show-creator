import { runService } from '../service/wpk-start';


export = async function ({
  args
}: any) {
  console.log('arg: ', args);
  const command = "start"
  runService()
}