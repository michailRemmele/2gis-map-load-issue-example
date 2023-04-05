import React from 'react';
import { createRoot } from 'react-dom/client';
// Использование системы модулей SystemJS и определение функции define в window
// приводит к поломке функции load из @2gis/mapgl
import 'systemjs/dist/s'
import 'systemjs/dist/extras/amd'
import 'systemjs/dist/extras/named-register'

import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
