import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import Logo from '/media/LogoR&CI.png';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/productos-y-servicios', label: 'Productos y Servicios' },
        { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
        { path: '/contacto', label: 'Contacto' },
    ];

    return (
        <Navbar>
            <NavbarBrand>
                <Link color='foreground' href='/'>
                    <img id='Logo' src={Logo} alt='Logo de Racks & Cases Innovación' />
                    <p className='font-bold text-inherit'>Racks & Cases Innovación</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className='hidden sm:flex gap-4' justify='end'>
                {navItems.map((item) => (
                    <NavbarItem key={item.path} isActive={location.pathname === item.path}>
                        <Link
                            color={location.pathname === item.path ? '' : 'foreground'}
                            href={item.path}
                            className={location.pathname === item.path ? 'active menu' : 'menu'}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}

export default Header;
