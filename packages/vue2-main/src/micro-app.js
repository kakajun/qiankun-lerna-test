import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'xwtet1',
    entry: '//localhost:7301',
    container: '#cnbi-viewport',
    activeRule: '/xwtet1'
  },
   {
    name: 'xwtest2',
    entry: '//localhost:7302',
    container: '#cnbi-viewport',
    activeRule: '/xwtest2'
  }
])

start()
