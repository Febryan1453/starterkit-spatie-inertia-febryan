import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import '../../../css/custom.css';
// import AdminMenuSidebar from './Menu/AdminMenuSidebar';
// import AkunMenuSidebar from './Menu/AkunMenuSidebar';
// import MemberMenuSidebar from './Menu/MemberMenuSidebar';
// import ManajemenPermissionMenuSidebar from './Menu/ManajemenPermissionMenuSidebar';
// import SidebarLink from './Menu/Link/SidebarLink';
// import ProductMenuSidebar from './Menu/ProductMenuSidebar';
// import hasAnyPermission from '../../Utils/Permissions';

const MySidebar = ({ activeMenu, setActiveMenu, sideOpen }) => {
    
    const { url } = usePage();

  return (
    <aside
      className={`fixed top-0 bottom-0 left-0 z-10 w-64 bg-white shadow-lg h-full transition-transform transform ${
        sideOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static overflow-y-auto hide-scrollbar`}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-grow p-4">
          <ul className="space-y-3">

            {/* Section */}
            <li>
              <div className="px-3 lg:mt-[-54px] pt-10 font-bold"></div>
            </li>

            {/* {hasAnyPermission(['sidebar.dashboard']) && (  
              <SidebarLink
              href={route('account.dashboard')}
              onClick={() => setActiveMenu('account/dashboard')}
              icon="fas fa-home"
              label="Dashboard"
              active={url.includes('account/dashboard')}
              />            
            )} */}

            <li>
              <a
                href="#dashboard"
                onClick={() => setActiveMenu('dashboard')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'dashboard' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-home mr-2"></i> Dashboard
              </a>
            </li>            

            <li>
              <div className="px-3 pt-2 text-xs font-bold text-blue-600 uppercase">Admin</div>
            </li>

            <li>
              <a
                href="#angkatan"
                onClick={() => setActiveMenu('angkatan')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'angkatan' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-calendar-days mr-2"></i> Angkatan Tahun
              </a>
            </li>

            <li>
              <a
                href="#jurusan"
                onClick={() => setActiveMenu('jurusan')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'jurusan' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-shuffle mr-2"></i> Jurusan
              </a>
            </li>

            <li>
              <a
                href="#matkul"
                onClick={() => setActiveMenu('matkul')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'matkul' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-book mr-2"></i> Mata Kuliah
              </a>
            </li>

            <li>
              <a
                href="#kelass"
                onClick={() => setActiveMenu('kelass')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'kelass' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-chalkboard-user mr-2"></i> Kelas
              </a>
            </li>

            <li>
              <a
                href="#mhs"
                onClick={() => setActiveMenu('mhs')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'mhs' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-user-graduate mr-2"></i> Mahasiswa
              </a>
            </li>

            <li>
              <a
                href="#pengajar"
                onClick={() => setActiveMenu('pengajar')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'pengajar' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-user-group mr-2"></i> Pengajar
              </a>
            </li>

            <li>
              <div className="px-3 pt-2 text-xs font-bold text-blue-600 uppercase">Dosen</div>
            </li>

            <li>
              <a
                href="#kelas"
                onClick={() => setActiveMenu('kelas')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'kelas' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-users-rectangle mr-2"></i> Kelas
              </a>
            </li>

            <li>
              <a
                href="#materi"
                onClick={() => setActiveMenu('materi')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'materi' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-person-chalkboard mr-2"></i> Materi
              </a>
            </li>

            <li>
              <a
                href="#tugas"
                onClick={() => setActiveMenu('tugas"')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'tugas"' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-hand-holding-hand mr-2"></i> Tugas
              </a>
            </li>

            <li>
              <div className="px-3 pt-2 text-xs font-bold text-blue-600 uppercase">Mahasiswa</div>
            </li>

            <li>
              <a
                href="#regiskelas"
                onClick={() => setActiveMenu('regiskelas"')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'regiskelas"' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-registered mr-2"></i> Registrasi Kelas
              </a>
            </li>

            <li>
              <a
                href="#kelasss"
                onClick={() => setActiveMenu('kelasss')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'kelasss' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-users-rectangle mr-2"></i> Kelas
              </a>
            </li>

            <li>
              <a
                href="#tugass"
                onClick={() => setActiveMenu('tugass"')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'tugass"' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-hand-holding-hand mr-2"></i> Tugas
              </a>
            </li>

            <li>
              <a
                href="#materii"
                onClick={() => setActiveMenu('materii')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'materii' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-person-chalkboard mr-2"></i> Materi
              </a>
            </li>

            <li>
              <a
                href="#absenkelas"
                onClick={() => setActiveMenu('absenkelas')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'absenkelas' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-clipboard-check mr-2"></i> Absensi Kelas
              </a>
            </li>

            <li>
              <a
                href="#absensholat"
                onClick={() => setActiveMenu('absensholat')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'absensholat' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-mosque mr-2"></i> Absensi Sholat
              </a>
            </li>

            <li>
              <div className="px-3 pt-2 text-xs font-bold text-blue-600 uppercase">Hak Akses</div>
            </li>

            <li>
              <a
                href="#roles"
                onClick={() => setActiveMenu('roles"')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'roles"' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-shield-alt mr-2"></i> Roles
              </a>
            </li>

            <li>
              <a
                href="#permissions"
                onClick={() => setActiveMenu('permissions""')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'permissions""' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-key mr-2"></i> Permissions
              </a>
            </li>

            <li>
              <a
                href="#users"
                onClick={() => setActiveMenu('users""')}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  activeMenu === 'users""' ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-users mr-2"></i> Pengguna
              </a>
            </li>
            

            

            {/* Admin Section */}
            {/* <AdminMenuSidebar setActiveMenu={setActiveMenu} /> */}

            {/* Manajemen Product Section */}
            {/* {hasAnyPermission(['sidebar.admin.manajemen_produk']) && (  
              <ProductMenuSidebar setActiveMenu={setActiveMenu} />
            )} */}

            {/* Manajemen Permissions Section */}
            {/* {hasAnyPermission(['sidebar.admin.manajemen_permissions']) && ( 
              <ManajemenPermissionMenuSidebar setActiveMenu={setActiveMenu} />
            )} */}

            {/* Member Section */}
            {/* {hasAnyPermission(['sidebar.member']) && ( 
              <MemberMenuSidebar setActiveMenu={setActiveMenu} />       
            )} */}

            {/* Account Section */}
            {/* <AkunMenuSidebar setActiveMenu={setActiveMenu} /> */}
            
          </ul>
        </nav>
        {/* <div className="p-4 text-center">
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded">Logout</button>
        </div> */}
      </div>
    </aside>
  );
}

export default MySidebar;
