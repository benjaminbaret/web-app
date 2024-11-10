import { usePathname } from 'next/navigation';

import { Bell, Thermometer, Settings, User, ChartSpline, ShoppingBasket } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Tableau de bord',
      href: '/dashboard',
      icon: <ChartSpline size={20} />,
      active: isNavItemActive(pathname, '/dashboard'),
      position: 'top',
    },
    {
      name: 'Produits',
      href: '/products',
      icon: <ShoppingBasket size={20} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'top',
    },
    {
      name: 'Températures',
      href: '/temperature',
      icon: <Thermometer size={20} />,
      active: isNavItemActive(pathname, '/projects'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};