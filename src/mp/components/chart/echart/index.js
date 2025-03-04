import * as echarts from '../common/lib/echarts.min';

Component({
  options: {
    virtualHost: true,
    multipleSlots: true,
  },
  properties: {
    id: {
      type: String,
      value: '',
    },
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    option: {
      type: Object,
      value: {},
    },
    dark: {
      type: Boolean,
      value: false,
    },
    opts: {
      type: Object,
      value: {},
    },
  },
  data: {
    ec: {},
    echartsInstance: null,
    echarts: null,
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.initData();
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    initData() {
      this.setData({
        id: this.id,
        ec: {
          onInit: this.initChart.bind(this),
        },
      });
    },
    async initChart(canvas, width, height, dpr) {
      const theme = this.data.dark ? 'dark' : null;
      const objEchart = echarts.init(canvas, theme, {
        width,
        height,
        devicePixelRatio: dpr,
      });
      canvas.setChart(objEchart);
      const options = this.data.option;
      objEchart.setOption(options, true);
      this._chart = objEchart;

      this.setData({
        echartsInstance: objEchart,
        echarts,
      });

      this.triggerEvent('onReady', { echartsInstance: objEchart, echarts });

      return objEchart;
    },
  },
  observers: {
    // 当参数变化时
    '**': async function () {
      const canvas = this.selectComponent(`#canvas_${this.properties.id}`);
      canvas?.init();
      const { option } = this.data;
      this._chart && this._chart.setOption(option, true);
    },
  },
});
