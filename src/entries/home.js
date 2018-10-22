import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const container = document.getElementById('home-container');
render(<Home data={data} />, container);