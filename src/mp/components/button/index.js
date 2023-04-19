Component({
  properties: {
    style: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '按钮',
    },
    size: {
      type: String,
      value: 'default',
    },
    type: {
      type: String,
      value: 'primary',
    },
    plain: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },
  data: {},
  methods: {
    triggerCustomEvent(e) {
      this.triggerEvent('customevent', e);
    },
  },
});
