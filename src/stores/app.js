import { Model } from 'backbone-x'

const AppData = Model({
    // xyz: Model({
    //     color: 'yellow',
    //     width: 20,
    //     height: 10
    // }),
    // abc: Model({
    //     abc: 'abc'
    // })
    name: 'foo'
})
const appData = (global.m = new AppData({}))
// console.log('app data...', appData)
export default appData
export const app = appData.proxy
