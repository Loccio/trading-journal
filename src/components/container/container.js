import Analytics from '../analytics/analytics';
import Archive from '../archive/archive';
import Dashboard from '../dashboard/dashboard';
import OpenTrades from '../opentrades/opentrades';
import Settings from '../settings/settings';
import {Routes as Switch, Route} from 'react-router-dom';

function Container()
{
    return(
        <div className=" bg-dark p-2 pl-24 w-screen h-screen">
            
        <Switch>
        <Route path="*" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/trades-open" element={<OpenTrades/>}/>
        <Route path="/trades-archive" element={<Archive/>}/>
        <Route path="/trades-analytics" element={<Analytics/>}/>
        <Route path="/settings" element={<Settings/>}/>
        
      </Switch>
        
         </div>);
}

export default Container;