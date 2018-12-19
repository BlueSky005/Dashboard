
import Home from './components/Home';
import Pages from './components/Pages';
import Charts from './components/Charts';
import Tables from './components/Tables';

export const routes = [

    { path: '', component: Home  },
    { path: '/home', component: Home  },
    { path: '/pages', component: Pages  },
    { path: '/charts', component: Charts  },
    { path: '/tables', component: Tables  },
    
];