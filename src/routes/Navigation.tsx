import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { routes as lazyRoutes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback={<span> Cargando... </span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {lazyRoutes.map((rt) => (
                                <li>
                                    <NavLink
                                        key={rt.name}
                                        to={rt.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{rt.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <Routes>
                        {lazyRoutes.map((rt) => (
                            <Route key={rt.to} path={rt.path} element={<rt.Component />} />

                        ))}

                        <Route path="/*" element={<Navigate to={lazyRoutes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
