// export const state = () => ({
//   states: {
//     state1: [
//       { prop: '速度模式', value: '快速' },
//       { prop: '直行模式', value: '关闭' },
//       { prop: '照明', value: '开启' },
//       { prop: '示警', value: '关闭' },
//       { prop: '驻车', value: '开启' },
//       { prop: '冷却', value: '关闭' },
//     ],
//     state2: [
//       { prop: '控制器温度', value: '56℃' },
//       { prop: '内部温度', value: '45℃' },
//       { prop: '左电机', value: '55℃' },
//       { prop: '右电机', value: '57℃' },
//       { prop: '电控箱温度', value: '5%RH' },
//       { prop: '内胆湿度', value: '8%RH' },
//     ],
//     state3: [
//       { prop: 'O2浓度', value: '34ppm' },
//       { prop: 'CO浓度', value: '1ppm' },
//       { prop: 'CO2浓度', value: '34ppm' },
//       { prop: 'CH4浓度', value: '1ppm' },
//       { prop: 'H2浓度', value: '34ppm' },
//       { prop: 'Cl2浓度', value: '1ppm' },
//     ],
//     state4: [
//       { prop: '环境温度', value: '928℃' },
//       { prop: '环境湿度', value: '35%RH' },
//       { prop: '环境压强', value: '0.1MPa' },
//       { prop: 'PM10', value: '36' },
//     ],
//   },
//   versions: [
//     {
//       id: 3,
//       title: '耐高温3',
//       note: 'xxx消防支队第三台耐高温机器人',
//       model: 'LSA001-21MPA',
//       numbering: '21MPA3',
//       serialNumber: '345F72EA901D337B',
//       moreInfo: [
//         {
//           title: '机器人',
//           desc: '硬件版本',
//           version: 'V1.1',
//         },
//         {
//           title: '机器人',
//           desc: '软件版本',
//           version: 'V4.2',
//         },
//         {
//           title: '遥控器',
//           desc: '硬件版本',
//           version: 'V2.1',
//         },
//         {
//           title: '遥控器',
//           desc: '软件版本',
//           version: 'V3.6',
//         },
//       ],
//     },
//   ],
//   notifications: [
//     {
//       image: 'info.png',
//       title: '消息1',
//       message:
//         '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
//     },
//     {
//       image: 'robot.png',
//       title: '消息2',
//       message:
//         '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
//     },
//     {
//       image: 'noti-video.png',
//       title: '消息3',
//       message:
//         '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
//     },
//     {
//       image: 'report-problem.png',
//       title: '消息3',
//       message:
//         '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
//     },
//   ],
// })

// const actions = {
//   SIGNIN(state, user) {
//     if (!user) {
//       //   remove state
//       state.commit('SET_USER', null)

//       //  redirect from here
//       this.$router.push({
//         path: '/Signin',
//       })
//     } else {
//       const { id, password, role } = user
//       state.commit('SET_USER', {
//         id,
//         password,
//         role,
//       })
//       this.$router.push({
//         path: '/',
//       })
//     }
//   },
// }

const state = () => ({
  user: null,
  states: {
    state1: [
      { prop: '速度模式', value: '快速' },
      { prop: '直行模式', value: '关闭' },
      { prop: '照明', value: '开启' },
      { prop: '示警', value: '关闭' },
      { prop: '驻车', value: '开启' },
      { prop: '冷却', value: '关闭' },
    ],
    state2: [
      { prop: '控制器温度', value: '56℃' },
      { prop: '内部温度', value: '45℃' },
      { prop: '左电机', value: '55℃' },
      { prop: '右电机', value: '57℃' },
      { prop: '电控箱温度', value: '5%RH' },
      { prop: '内胆湿度', value: '8%RH' },
    ],
    state3: [
      { prop: 'O2浓度', value: '34ppm' },
      { prop: 'CO浓度', value: '1ppm' },
      { prop: 'CO2浓度', value: '34ppm' },
      { prop: 'CH4浓度', value: '1ppm' },
      { prop: 'H2浓度', value: '34ppm' },
      { prop: 'Cl2浓度', value: '1ppm' },
    ],
    state4: [
      { prop: '环境温度', value: '928℃' },
      { prop: '环境湿度', value: '35%RH' },
      { prop: '环境压强', value: '0.1MPa' },
      { prop: 'PM10', value: '36' },
    ],
  },
  versions: [
    {
      id: 3,
      title: '耐高温3',
      note: 'xxx消防支队第三台耐高温机器人',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      serialNumber: '345F72EA901D337B',
      moreInfo: [
        {
          title: '机器人',
          desc: '硬件版本',
          version: 'V1.1',
        },
        {
          title: '机器人',
          desc: '软件版本',
          version: 'V4.2',
        },
        {
          title: '遥控器',
          desc: '硬件版本',
          version: 'V2.1',
        },
        {
          title: '遥控器',
          desc: '软件版本',
          version: 'V3.6',
        },
      ],
    },
  ],
  notifications: [
    {
      image: 'info.png',
      title: '消息1',
      message:
        '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
    },
    {
      image: 'robot.png',
      title: '消息2',
      message:
        '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
    },
    {
      image: 'noti-video.png',
      title: '消息3',
      message:
        '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
    },
    {
      image: 'report-problem.png',
      title: '消息3',
      message:
        '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。',
    },
  ],
  data: [
    {
      id: 1,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 2,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 3,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 4,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 5,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 6,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 7,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 8,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 9,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 10,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 11,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 12,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 13,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 14,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 15,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 16,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 17,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 18,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 19,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 20,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 21,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 22,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 23,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 24,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 25,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 26,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 27,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 28,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 29,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 30,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 31,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 32,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 33,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
    {
      id: 34,
      acc_num: '3356789',
      name: '朝阳支队',
      note: '北京市朝阳支队',
    },
  ],
  videos: [
    {
      id: 1,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 2,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 3,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 4,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 5,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 6,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 7,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 8,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 9,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 10,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 11,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 12,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 13,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 14,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 15,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 16,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 17,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 18,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 19,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 20,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 21,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 22,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 23,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 24,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 25,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 26,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 27,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 28,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 29,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 30,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 31,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 32,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 33,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
    {
      id: 34,
      sn: '12367788AE9633457546EF7DC8D2A5',
      model: 'LSA001-21MPA',
      numbering: '21MPA3',
      name: '耐高温机器人1',
      unit: '3356789',
      note: 'xxx',
    },
  ],
  profiles: [
    {
      id: 1,
      acc_num: '3356789',
      name: '赵研卓',
      password: '*******',
      note: '北京市东城支队副队长',
      unit: '3356789',
      sn: [
        '12367788AE9633457546EF7DC8D2A5',
        '12367788AE9633457546EF7DC8D2A6',
        '12367788AE9633457546EF7DC8D2A7',
      ],
    },
    {
      id: 2,
      acc_num: '2134589',
      name: '武亦超',
      password: '*******',
      note: 'xxx',
      unit: '2134589',
      sn: [
        '12367788AE9633457546EF777F63D9',
        '12367788AE9633457546EF777F63DA',
        '12367788AE9633457546EF777F63DB',
      ],
    },
    {
      id: 3,
      acc_num: '2134345',
      name: '赵研卓2',
      password: '*******',
      note: '北京市东城支队副队长',
      unit: '2134345',
      sn: ['12367788AE9633457546EF7DC8D2A5', '12367788AE9633457546EF7DC8D2A6'],
    },
    {
      id: 4,
      acc_num: '2134123',
      name: '赵研卓3',
      password: '*******',
      note: '北京市东城支队副队长',
      unit: '2134123',
      sn: ['12367788AE9633457546EF7DC8D2A5'],
    },
    {
      id: 5,
      acc_num: '3356123',
      name: '赵研卓4',
      password: '*******',
      note: '北京市东城支队副队长',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 6,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 7,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 8,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 9,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 10,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 11,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
    {
      id: 12,
      acc_num: '3356123',
      name: '21B2E',
      password: '耐高温机器人3',
      note: 'xxx',
      unit: '3356123',
      sn: ['12367788AE9633457546EF777F63D9'],
    },
  ],
  adminNotifications: [
    {
      id: 1,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 2,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 3,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 4,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 5,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 6,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 7,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 8,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 9,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 10,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 11,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 12,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 13,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
    {
      id: 14,
      subject: '热烈祝贺力升高科荣获xxx一等奖',
    },
  ],
})

const mutations = {
  SET_USER(state, { id, password, role }) {
    state.user = { id, password, role }
    this.$router.push({
      path: '/',
    })
  },
}

const getters = {
  getUser(state) {
    return state.user
  },
  getClientsData: (state) => () => {
    return state.data
  },
  getVideos: (state) => () => {
    return state.videos
  },
  getProfiles: (state) => () => {
    return state.profiles
  },
  getNotifications: (state) => () => {
    return state.adminNotifications
  },
}

export default {
  state,
  // actions,
  mutations,
  getters,
}
