import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import Block from '../src/index';

render(<Block />, document.body, { driver: DriverUniversal });
