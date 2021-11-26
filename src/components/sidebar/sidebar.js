import {GiReactor} from 'react-icons/gi';
import {BiStats} from 'react-icons/bi';
import {BiSpreadsheet} from 'react-icons/bi';
import {MdSpaceDashboard} from 'react-icons/md';
import {MdLocalFireDepartment} from 'react-icons/md';
import {MdSettings} from 'react-icons/md';
import {Link} from 'react-router-dom';
function Sidebar() {
    return (



<div className='fixed top-0 h-screen w-20  p-2 bg-darker'>

        <div className='text-light flex '>
        <span className=' p-2 mb-4'><GiReactor size={46} /></span>
            </div>

        <br/>
        <div className='text-light flex ' >
        <Link to="/dashboard" className="p-2 mb-4"><MdSpaceDashboard size={46} /></Link>
        </div>
        <div className='text-light flex ' >
        <Link to="/trades-archive" className="p-2 mb-4"><BiSpreadsheet size={46} /></Link>
        </div>
        <div className='text-light flex ' >
        <Link to="/trades-open" className="p-2 mb-4"><MdLocalFireDepartment size={46} /></Link>
        </div>
        <div className='text-light flex ' >
        <Link to="/trades-analytics" className="p-2 mb-4"><BiStats size={46} /></Link>
        </div>
        <div className='text-light flex ' >
        <Link to="/settings" className="p-2 mb-4"><MdSettings size={46} /></Link>
        </div>


     

</div>
    );
}

export default Sidebar;