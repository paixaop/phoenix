HYPER = ['ctrl', 'alt', 'cmd'];

const monitors = {
    lg: ['6720x1890', '5120x1440'],
    mac: ['1792x1120', '1728x1117','2056x1329']
};

for(const m in monitors) {
  console.log(m);
}
const m = "lg"
if( monitors[m]) {
  console.log('found it');
}

const layouts = [
  ['keypad/', HYPER, 'twoMonitors'],
  ['keypad=', HYPER, 'twoMonitorsCode'],
  ['keypad*', HYPER, 'work']
];

const [key, modifier, layout] =layouts[0];
console.log(key);