import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'xwtet1',
    entry: '//localhost:7301',
    container: '#cnbi-viewport',
    activeRule: '/xwtet1'
  },
   {
    name: 'xwtestone',
    entry: '//localhost:7302',
    container: '#cnbi-viewport',
    activeRule: '/xwtestone'
  }
])

start()
