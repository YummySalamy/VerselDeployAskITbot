import {
  IconAperture, IconLayoutDashboard, IconLogin, IconUserPlus, IconMessageChatbot, IconHierarchy3, IconBrandPrisma, IconSettings
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Principal',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilidades',
  },
  {
    id: uniqueId(),
    title: 'Embeddings',
    icon: IconHierarchy3,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'ChatBot',
    icon: IconMessageChatbot,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Ingresar',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Registrarse',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Gestionar recursos',
    icon: IconBrandPrisma,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Configuración',
    icon: IconSettings,
    href: '/sample-page',
  },
];

export default Menuitems;
