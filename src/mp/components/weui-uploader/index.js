const timeoutMs = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

Component({
  options: {
    virtualHost: true,
  },
  properties: {
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    id: {
      type: String,
      value: '',
    },
    callbacks: {
      type: Object,
      value: null,
    },
  },
  lifetimes: {
    attached() {
      const self = this;
      this.setData({
        upload: self.uploadFile.bind(self),
      });
    },
  },
  data: {},
  methods: {
    uploadFile: async function (files) {
      console.log(this.data.callbacks?.beforeUpload?.handler);
      const cbResult = this.data.callbacks?.beforeUpload?.handler(files);
      if (cbResult === false) {
        return { urls: files.tempFilePaths };
      }
      console.log('FAKE uploading To Cloud');
      await timeoutMs(3000);
      if (typeof cbResult === 'object' && cbResult !== null) {
        return { ...files, urls: files.tempFilePaths, ...cbResult };
      }
      return { ...files, urls: files.tempFilePaths };
    },
    onSuccess: function (params) {
      console.log('event', params);
    },
  },
  observers: {},
});
