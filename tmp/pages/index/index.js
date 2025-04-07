Page({
  data: {
    companyName: '示例产废单位',
    wasteType: '工业废水',
    totalWaste: '1000吨',
    actualTransfer: '800吨',
    remainingStorage: '200吨',
    estimatedAnnual: '1200吨',
    contractAnnual: '1000吨',
    eiaAnnual: '1500吨'
  },

  onLoad: function() {
    // 这里可以添加数据加载逻辑
    this.loadCompanyData();
  },

  loadCompanyData: function() {
    // 模拟从服务器获取数据
    // 实际项目中需要替换为真实的API调用
    wx.request({
      url: 'your-api-url',
      method: 'GET',
      success: (res) => {
        if (res.data.success) {
          this.setData({
            companyName: res.data.companyName,
            wasteType: res.data.wasteType,
            totalWaste: res.data.totalWaste,
            actualTransfer: res.data.actualTransfer,
            remainingStorage: res.data.remainingStorage,
            estimatedAnnual: res.data.estimatedAnnual,
            contractAnnual: res.data.contractAnnual,
            eiaAnnual: res.data.eiaAnnual
          });
        }
      },
      fail: (error) => {
        console.error('数据加载失败:', error);
      }
    });
  }
}); 