import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:7301',
    container: '#cnbi-viewport',
    activeRule: '/vue'
  },
   {
    name: 'xwtest2',
    entry: '//localhost:7302',
    container: '#cnbi-viewport',
    activeRule: '/xwtest2'
  }
])

start()
